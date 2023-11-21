import React, {useState,useEffect,useCallback} from 'react'; 
import styles from './App.module.css';
import Challenges from './Components/Challenges';
import UserDetails from './Components/UserDetails';

function App() {
  const [quizDetails,setQuizDetails] = useState([]);
  const sendRequest = useCallback(async() => {
    const response = await fetch('https://database-request-default-rtdb.europe-west1.firebasedatabase.app/quiztimes.json')
    const data = await response.json();
    for(let key in data){
      setQuizDetails([...data[key]])
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
