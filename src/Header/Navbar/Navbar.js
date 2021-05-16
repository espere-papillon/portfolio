import React from "react";
import styles from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a href="#">PORTFOLIO</a>
            <a href="#">SKILLS</a>
            <a href="#">PROJECTS</a>
            <a href="#">CONTACTS</a>
        </div>
    )
}