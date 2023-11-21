import React,{useState, useRef} from "react";
import styles from './Challenge.module.css';
import Modal from "./Modal";

const Challenge = (props) => {
    const [remainingTime, setRemainingTime] = useState(props.targetTime * 1000);
    const intervalIdentifier = useRef();
    const modal = useRef();

    const timerIsActive = (remainingTime>=0) && (remainingTime<(props.targetTime*1000));
    const timerIsExpired = remainingTime<0? true:false;
    if(timerIsExpired)
    {
        modal.current.showModal();
        clearInterval(intervalIdentifier.current);

        console.log('timerisexpired:',remainingTime);
    }

    const onReset = () =>{
        setRemainingTime(props.targetTime * 1000);
    }


    const startHandler = () => {
        intervalIdentifier.current = setInterval(()=>{setRemainingTime((previousRemainingTime)=> previousRemainingTime-10 )},10);
    }

    const stopHandler = () => {
        clearInterval(intervalIdentifier.current);
        modal.current.showModal();
    }

    return <React.Fragment>
        <Modal ref={modal} timerIsExpired={timerIsExpired} timeRemaining={remainingTime} time={props.targetTime} reset={onReset}/>
        <div className={styles.challenge}>
        <h1>{props.title}</h1>
        <h3 className={styles.time}>{props.targetTime} second{props.targetTime===1 ? '':'s'}</h3>
        <button className={styles.button} onClick={timerIsActive? stopHandler: startHandler}>{timerIsActive? 'Stop':'Start'} Challenge</button>
        <h3>{timerIsActive ? 'Timer is running.....': 'Timer Inactive'}</h3>
        </div>

    </React.Fragment>
   

}

export default Challenge;