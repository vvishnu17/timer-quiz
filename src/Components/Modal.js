import React, { forwardRef } from "react";
import styles from './Modal.module.css'

const Modal = forwardRef((props,ref) =>{
    const score = ((1-(props.timeRemaining/(props.time * 1000))) * 100).toFixed(2);

    return <dialog ref={ref} className={styles.modal} onClose={props.reset}>
        {props.timerIsExpired && <h1>You Lost!</h1>}
        {!props.timerIsExpired && <h1>Your Score {score}</h1>}
        <p>The target time was <strong>{props.time} second{props.time === 1 ? '':'s'}</strong></p>
        <p>You stopped the timer with <strong>{props.timerIsExpired ? 0:props.timeRemaining/1000} seconds</strong> left</p>
        <form method="dialog" onSubmit={props.reset}>
            <button>Close</button>
        </form>
        

    </dialog>

})

export default Modal;