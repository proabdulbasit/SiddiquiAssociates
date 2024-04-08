import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Headerlogo from "../../assets/images/Header-Logo.webp"

import "./header.css"

const Header = () => {
  return (
    <div className="headerOuter">
      <div className="container-header">
        <div className="headerLogoSection">
          <Link to="/"><img src={Headerlogo} alt="Siddiqui Associates Logo Blue" /></Link></div>
        <div>
          <p style={{ marginBottom: "0.5rem" }}>Email Address</p>
          <Link to="mailto:info@siddiquiassociates.com.au" className="headerLink">
            <h6>info@siddiquiassociates.com.au</h6>
          </Link>
        </div>
        <div>
          <p style={{ marginBottom: "0.5rem" }}>Phone Number</p>
          <Link to="tel:0292120303" className="headerLink">
            <h6>(02) 9212 0303</h6>
          </Link>
        </div>

        <Link to="/contact-us" > <Button className="appointment">Book Appointment</Button></Link>
      </div>
    </div>
  );
};

export default Header;
