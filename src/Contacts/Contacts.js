import React from "react";
import styles from "./Contacts.module.css"
import stylesContainer from "../Container.module.css"

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <a name="contacts"></a>
                <h2>CONTACTS</h2>
                <div className={styles.form}>
                    <form action="#">
                        <ul className={styles.ul}>
                            <li>
                                <input className={styles.input} placeholder={"Name"} type="text" />
                            </li>
                            <li>
                                <input className={styles.input} placeholder={"E-mail"} type="email" />
                            </li>
                            <li>
                                <textarea className={styles.textarea} placeholder={"Message"}></textarea>
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
