import React from "react";
import styles from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a href="#main">PORTFOLIO</a>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contacts">CONTACTS</a>
        </div>
    )
}