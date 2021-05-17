import React from "react";
import styles from "./Projects.module.css"
import {Project} from "./Project/Project";
import stylesContainer from "../Container.module.css";

export const Projects = () => {
    const skills = [
        {img: null, title: "Project 1", description: "Really good project"},
        {img: null, title: "Project 2", description: "Really good project Really good project Really good project Really good project Really good project Really good project Really good project"},
    ]

    skills.map(element => {
        return (
            <Project img={element.img} title={element.title} description={element.description}/>
        )
    })
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h2>PROJECTS</h2>
                <div className={styles.projects}>
                    {skills.map((element,index) => {
                        return (
                            <Project key={index} img={element.img} title={element.title} description={element.description}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
