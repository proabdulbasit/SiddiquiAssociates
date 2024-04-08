import React, { useState, useEffect } from 'react'
import Styles from "./serviceCounter.module.scss"

const ServiceCounter = ({ imageSrc, sign, text, limit,alt }) => {
    const [Counter, setCounter] = useState(0);

    useEffect(() => {
        if (Counter < limit) {
            setTimeout(() => {
                setCounter(Counter + 1);
            }, 20);
        }
    });
    return (
        <div className={Styles.Pockets}>
            <img className={Styles.Image} src={imageSrc} alt={alt} />

            <h1 className={Styles.Counter}>
                {Counter}
                {sign}
            </h1>
            <p className={Styles.Text}>{text}</p>
        </div>
    )
}

export default ServiceCounter