import React from 'react'


import Styles from "./servvicelayout.module.scss"

const ServiceLayout = ({ img, heading, detail,alt }) => {
    return (
       <div className='container' style={{marginTop:"80px"}}>
        <h2>{heading}</h2>
     
        <div className={`${Styles.serviceDetailContainer} `}>

            <div className={Styles.serviceContent}>
                {detail.map((value)=>
                <p>{value.content}</p>
                )}
                
                
                
               
              
                
            </div>
            <div className={Styles.serviceDetailImg}>
                <img src={img} alt={alt} className={Styles.image1}/>
                
            </div>
        </div>
        </div>
       
    )
}

export default ServiceLayout