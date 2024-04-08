import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "./aboutCard.module.scss";

const AboutCard = ({ logo, img, name, certification, title, exp,alt,logoDescription,link,number }) => {
    return (
        <>
            <div className={Styles.cardWrapper}>
                <div className={Styles.imgWrapper}>
                    <img src={img} alt={alt} />
                </div>
                <div className={Styles.contentWrapper}>
                    <div className={Styles.content}>
                        <h2>{name}</h2>
                        <p>{certification}</p>
                        <p>{title}</p>
                        <p>Experience : {exp}</p>
                        <p>Contact No: <Link to={link}  className={Styles.num_link}>{number}</Link></p>
                    </div>
                    <div className={Styles.logoWrapper}>
                        <img src={logo} alt={logoDescription} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard