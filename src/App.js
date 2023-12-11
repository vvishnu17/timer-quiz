import React, {useState,useEffect,useCallback} from 'react'; 
import styles from './App.module.css';
import Challenges from './Components/Challenges';
import UserDetails from './Components/UserDetails';

function App() {
  const localQuizDetails = [
    {
      targetTime: 1,
      title: 'Easy',
    },
    {
      targetTime: 5,
      title: 'Not Easy',
    },
    {
      targetTime: 10,
      title: 'Getting Tough',
    },
    {
      targetTime: 15,
      title: 'Pros Only',
    },
    {
      targetTime: 20,
      title: 'Tougher',
    },
    {
      targetTime: 25,
      title: 'Toughest',
    },
  ]
  const [quizDetails,setQuizDetails] = useState([]);
  const sendRequest = useCallback(async() => {
    try{
    const response = await fetch('https://database-request-default-rtdb.europe-west1.firebasedatabase.app/quiztimes.json')
    if(response.status !== 200)
    {
      throw new Error(response.statusText)
    }
    const data = await response.json();
    for(let key in data){
      setQuizDetails([...data[key]])
    }}
    catch(error){
      console.log("Error : ",error.message);
    }
  },[])
  useEffect(()=>{
    sendRequest();
  },[sendRequest]);

  return (
    <div className={styles.content} >
      <UserDetails />
      <Challenges quizDetails={quizDetails} />
    </div>
  );
}

export default App;
