import React from 'react'
import Styles from "./contactCard.module.scss"
import aus from "../../assets/images/aus.gif"

const ContactCard = () => {
    return (
        <div className={Styles.contactCardContainer}>
            <h2>Get in touch</h2>
            <p>info@siddiquiassociates.com.au</p>
            <div className={Styles.cardImg}>
                <img src={aus} alt="pakistan" />
                <p>(02) 9212 0303</p>
            </div>
        </div>
    )
}

export default ContactCard