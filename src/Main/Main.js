import React from "react";
import styles from "./Main.module.css"
import stylesContainer from "../Container.module.css"

export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <div className={styles.greeting}>
                    <span>HELLO THERE</span>
                    <h1>MY NAME MARINA</h1>
                    <p>I'M A FRONTEND DEVELOPER</p>
                </div>
                {/*<img src={} alt="Photo"/>*/}
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}
