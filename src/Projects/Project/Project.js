import React from "react";
import styles from "./Project.module.css"
// import phone from "../../img/phoneProject.png"

export const Project = (props) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.imgProject}>
                {/*<img src={props.img} alt="phone"/>*/}
                {/*<img src={phone} alt="phone"/>*/}
                <a href={props.link}>GO TO A LINK</a>
            </div>
            <div className={styles.descriptionProject}>
                <div className={styles.titleProject}>
                    <h3>{props.title}</h3>
                </div>
                <span>{props.description}</span>
            </div>
        </div>
    )
}
