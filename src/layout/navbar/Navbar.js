import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Headerlogo from "../../assets/images/Header Logo 2 white.webp"


const Navbar = () => {
  const navbarComponentSubmenu1 = [
    {
      name: "BAS",
      Link: "/business-activity-statement",
    },


    {
      name: "Income Tax and Tax Return Service",
      Link: "/income-tax-and-tax-returns-service",
    },
    {
      name: "Business Planning Advisory And Formation Services",
      Link: "/business-planning-advisory-formation-services",
    },
    {
      name: "Superannuation",
      Link: "/superannuation",
    },
    {
      name: "Bookkeeping",
      Link: "/bookkeeping",
    },
    {
      name: "Business Structures & New Business Setup Services",
      Link: "/Business-Structures-New-Business-Setup-Services",
    },

  ];

  return (
    <nav class="navbar">
      <div class="wrapper">
        <div class="logo">
          <Link to="/">
            <img src={Headerlogo} alt="Siddiqui Associate Logo White" className="logoheader2" />
          </Link>
        </div>

        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul class="nav-links">
          <label for="close-btn" class="btn close-btn">
            <i class="fas fa-times"></i>
          </label>
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/services" class="desktop-item">
              SERVICES
            </Link>
            <input type="checkbox" id="showMega" />
            <label for="showMega" class="mobile-item">
              <Link
                to="/services"
                class="services-custom"
                style={{ display: "inline" }}
              >
                SERVICES
              </Link>{" "}
              <i
                class="fa-solid fa-caret-down"
                style={{ marginLeft: "10px", color: "white" }}
              ></i>
            </label>
            <div class="mega-box">
              <div class="content">
                <div class="row">

                  <ul class="mega-links">
                    {navbarComponentSubmenu1.map((value) => (
                      <li>
                        <Link to={value.Link}>{value.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </li>
          <li>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
          <li>
            <Link to="/about-us">ABOUT US</Link>
          </li>
        </ul>
        <label for="menu-btn" class="btn menu-btn">
          <i class="fas fa-bars"></i>
        </label>

      </div>
    </nav>
  );
};

export default Navbar;
