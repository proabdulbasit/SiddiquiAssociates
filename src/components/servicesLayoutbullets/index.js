import React from 'react'
import Serviceslist from '../servicesList/Serviceslist'


import Styles from "./servicesLayoutbullets.module.scss"

const ServiceLayout = ({ img, heading, list ,content,listheading,alt}) => {
    return (
       <div className={`${Styles.section} container`} >
        <h2>{heading}</h2>
     
        <div className={`${Styles.serviceDetailContainer} `}>

            <div className={Styles.serviceContent}>
                <p>{listheading}</p>
                <ul>
               <Serviceslist list={list}/>
                
                </ul>
                
               <p>{content}</p>
              
                
            </div>
            <div className={Styles.serviceDetailImg}>
                <img src={img} alt={alt} className={Styles.image1}/>
                
            </div>
        </div>
        </div>
       
    )
}

export default ServiceLayout