import React from "react";
import styles from "./Header.module.css"
import stylesContainer from "../Container.module.css"
import {Navbar} from "./Navbar/Navbar";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <Navbar/>
            </div>
        </div>
    )
}
