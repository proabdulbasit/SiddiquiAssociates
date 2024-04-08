// import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../layout/footer'
// import Button from '../../components/button'
import Style from "./404page.module.css"

const index = () => {
  return (
    <>  
      <div className={`container`}>
<div className={Style.outer_404}>

  <div className={Style.fonts}>
    <span>4</span>0<span>4</span>
  </div>
  <h1>Page Not Found</h1>
<Link to={"https://siddiquiassociates.com.au/"} className={Style.home_link}>Return To Home Page</Link>  

    </div>
    </div>
    <Footer/>
    </>

  )
}

export default index