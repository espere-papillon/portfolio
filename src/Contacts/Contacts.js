import React from "react";
import styles from "./Contacts.module.css"
import stylesContainer from "../Container.module.css"

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h2>CONTACTS</h2>
                <div className={styles.form}>
                    <form action="#">
                        <ul>
                            <li>
                                <input placeholder={"Name"} type="text" />
                            </li>
                            <li>
                                <input placeholder={"E-mail"} type="email" />
                            </li>
                            <li>
                                <textarea placeholder={"Message"}></textarea>
                            </li>
                            <li className={styles.button}>
                                <button type="submit">SEND MESSAGE</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}
