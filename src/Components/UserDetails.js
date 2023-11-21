import React,{useState,useRef} from "react";
import styles from './UserDetails.module.css';

const UserDetails = () =>{
    const [name,setName] = useState('');
    const enteredName = useRef();

    const nameChangeHandler = () =>{
        setName(enteredName.current.value);
        enteredName.current.value = '';
    }

    return <div className={styles.details}>
        <h1>The <strong>Almost</strong> final countdown</h1>
        <h4>Stop the timer once you estimate the time is(almost) up</h4>
        <h2>Welcome {name? name:''}</h2>
        <p>
        <input ref={enteredName} type="text" />
        <button onClick={nameChangeHandler}>Set Name</button>
        </p>
    </div>
}

export default UserDetails;