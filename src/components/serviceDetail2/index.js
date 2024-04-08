import React from 'react'
import Button from '../button';
import { Link } from 'react-router-dom';

import  Styles from "./serviceDetail2.module.scss";

const ServiceDetail = ({ img, heading, detail ,link,alt}) => {
    return (
       
     
        <div className={`${Styles.serviceDetailContainer} container`}>
            <div className={Styles.serviceDetailImg}>
                <img src={img} alt={alt}  className={Styles.image1}/>
                
            </div>
            <div className={Styles.serviceContent}>
                <h1>{heading}</h1>
                <p>{detail}</p>
                <div style={{width:"100%", textAlign:"center"}}>
                <img src={img} alt={alt} className={Styles.imageTask}/>
              <Link to={link}>  <Button msg="View More" /></Link>
                </div>
            </div>
           
        </div>
       
    )
}

export default ServiceDetail