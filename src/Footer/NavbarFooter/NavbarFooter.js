import React from "react";
import styles from "./NavbarFooter.module.css"
import github from "../../img/github.svg"
import linkedin from "../../img/linkedin.svg"
import facebook from "../../img/facebook.svg"
import mail from "../../img/mail.svg"

export const NavbarFooter = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.pictures}>
                <a href="https://github.com/"><img className={styles.img} src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/"><img className={styles.img} src={linkedin} alt="linkedin"/></a>
                <a href="https://www.facebook.com/"><img className={styles.img} src={facebook} alt="facebook"/></a>
                <a href="https://www.google.com/"><img className={styles.img} src={mail} alt="mail"/></a>
            </div>
        </div>
    )
}