import React from "react";
import styles from "./Skill.module.css"

export const Skill = (props) => {
    return (
        <div className={styles.skillBlock}>
            {/*<img src={props.img} alt="Image skill"/>*/}
            <div className={styles.img}></div>
            <h3 className={styles.title}>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    )
}
