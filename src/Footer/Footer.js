import React from "react";
import styles from "./Footer.module.css"
import stylesContainer from "../Container.module.css"
import {NavbarFooter} from "./NavbarFooter/NavbarFooter";
import copyright from "../img/copyright-symbol.svg"

export const Footer = () => {
    return (
        <div className={styles.header}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h2 className={styles.name}>MARINA BOVKUNOVICH</h2>
                <NavbarFooter/>
                <div className={styles.copyrightBlock}>
                    <img className={styles.copyrightImg} src={copyright} alt="Image all rights reserved"/>
                    <p className={styles.copyright}>ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </div>
    )
}
