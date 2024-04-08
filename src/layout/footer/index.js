import React from "react";
import { Link } from "react-router-dom";
import Styles from "./footer.module.scss";
import FooterLogo from "../../assets/images/Logo footer.webp"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={Styles.footerWrapper}>
        <div className={Styles.contact}>

          <Link to="/"><img src={FooterLogo} alt="siddiquiassociates.com.au logo" className={Styles.footerImg}></img></Link>
        </div>
        <div className={Styles.menu}>
          <h2 style={{ marginBottom: "5px" }}>Quick Menu</h2>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className={Styles.content}>
          <h2 style={{ marginBottom: "10px", marginTop: "22px" }}>Siddiqui Associates</h2>

          <p>
            We are committed to our mission & goals and look forward to building
            the best client-customer relationship. Our greatest strength is our
            communication and commitments to deliver what we pledge.
          </p>
        </div>
      </div>
      <div className={Styles.footerWrapper}>
        <div className={Styles.contact}>
          <div className={Styles.menu_last}>


            <Link to="/term-and-condition" className={Styles.links} >  <p>Terms And Conditions</p></Link>
            <Link to="/privacy-policy" className={Styles.links} >
              <p>
                Privacy And Policy
              </p>
            </Link>
          </div>
          <div style={{ display: "flex" }}>
            <Link to={"https://www.facebook.com/Siddiquiassociates.au/"} target="blank">

              <FaFacebook className={Styles.icon} />
            </Link>
            <Link to={"https://www.instagram.com/siddiqui_associates.au/"} target="blank">
              <FaInstagram className={Styles.icon} />
            </Link>
            <Link to={"https://www.linkedin.com/company/siddiqui-associates-taxation-accounting-services/"} target="blank">
              <FaLinkedin className={Styles.icon} />
            </Link>

          </div>
          <p style={{ textAlign: "center" }}>Copyright @ 2023.<br />
            All Rights Reserved Siddiqui Associates.</p>
        </div>
        <div className={Styles.menu_mid}>
          <Link to="/term-and-condition" className={Styles.links} >  <p>Terms And Conditions</p></Link>
          <Link to="/privacy-policy" className={Styles.links} >
            <p>
              Privacy And Policy
            </p>
          </Link>
        </div>

        <div className={Styles.contact_content}>

          <Link to="tel:(02) 9212 0303 " className={Styles.links} >
            <p><i class="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>
              (02) 9212 0303
            </p>
          </Link>

          <Link to="tel:+61 401 154 312  " className={Styles.links} >
            <p><i class="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>
              +61 401 154 312
            </p>
          </Link>


          <Link to="tel:(02) 9380 9831" className={Styles.links} >
            <p><i class="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>
              (02) 9380 9831
            </p>
          </Link>

          <Link to="tel:+61 412 939 117 " className={Styles.links} >
            <p><i class="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>
              +61 412 939 117
            </p>
          </Link>


          <Link to="tel:+61 0438 418 266" className={Styles.links} >
            <p><i class="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>
              +61 0438 418 266
            </p>
          </Link>
          <Link to="tel:+61 469 782 387 " className={Styles.links} >
            <p><i class="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>
              +61 469 782 387
            </p>
          </Link>






        </div>

      </div>

    </>
  );
};

export default Footer;
