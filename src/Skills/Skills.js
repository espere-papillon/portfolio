import React from "react";
import styles from "./Skills.module.css"
import {Skill} from "./Skill/Skill";
import stylesContainer from "../Container.module.css";

export const Skills = () => {
    const skills = [
        {img: null, title: "HTML", description: "Really good skills"},
        {img: null, title: "CSS", description: "Really good skills"},
        {img: null, title: "JS", description: "Really good skills \nReally good skills"},
        {img: null, title: "REACT", description: "Really good skills \nReally good skills \n Really good skills Really good skills"},
    ]

    skills.map(element => {
        return (
            <Skill img={element.img} title={element.title} description={element.description}/>
        )
    })
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <a name="skills"></a>
                <h2>SKILLS</h2>
                <div className={styles.skills}>
                    {skills.map((element,index) => {
                        return (
                            <Skill key={index} img={element.img} title={element.title} description={element.description}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
