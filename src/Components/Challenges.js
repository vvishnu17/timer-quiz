import React from "react";
import styles from './Challenges.module.css';
import Challenge from "./Challenge";

const Challenges = (props) =>{
    const challengeList = props.quizDetails.map((data)=> <Challenge key={data.title} title={data.title} targetTime={data.targetTime} />)
    return <div className={styles.challenges}>
        {challengeList}
    </div>
}

export default Challenges;