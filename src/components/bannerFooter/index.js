import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import "./banner.css"

const BannerFooter = () => {
  return (
    <div className='container bannerFooter'>
   <div className='first_sect'>
    <h5 className='banner_heading'>CONTACT US</h5>
    <h1 className='banner_title'>TO SCHEDULE A CONSULTATION!</h1>
    </div>
   <div className='footerBannerBtnSection'>


<Link to="/contact-us"><Button className='footerBannerBtn'>Contact Us</Button></Link>
   
   </div>



    </div>
  )
}

export default BannerFooter