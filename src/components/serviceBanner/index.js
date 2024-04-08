import React from 'react'
import Styles from "./serviceBanner.module.scss"

const ServiceBanner = ({ img, heading, detail,alt }) => {
    return (
        <div className={`${Styles.bannerContainer} container-fluid`}>
            <img src={img} alt={alt} />
            <div className={`${Styles.serviceBanner} container`}>
                <div className={`${Styles.heading}`}>
                    <h1>{heading}</h1>
                    
                    <p>{detail}</p>

                </div>
            </div>
        </div>

    )
}

export default ServiceBanner;