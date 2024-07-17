import React, { useState } from "react";
import ImgLogo from "../../assets/images/img_logo.svg";
import responsiveLogo from "../../assets/images/Union.svg";
import strokeImage from "../../assets/images/Vector.svg";
import searchIcon from "../../assets/images/Search.svg";
import homeIcon from "../../assets/images/Home.svg";
import aboutIcon from "../../assets/images/bar-chart.svg";
import contactIcon from "../../assets/images/Document.svg";

import underlineIcon from "../../assets/images/Vector 6.svg";
import "./Header.css";

export default function Header(props) {
  const [showZenpay, setShowZenpay] = useState(false);


  const handleStrokeImageClick = () => {
      setShowZenpay(true);
    };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={ImgLogo} alt="Logo" className="default-logo" />
        </div>
      </div>
      <div className="navbar-right">
        <div className="responsive-stroke-container">
          <img
            src={responsiveLogo}
            alt="Responsive Logo"
            className="responsive-logo"
          />
          {!showZenpay ? (
            <img
              src={strokeImage}
              className="stroke-image"
              alt="Stroke Vector Image"
              onClick={handleStrokeImageClick}
            />
          ) : (
            <span className="zenpay-text">Tipsource</span>
          )}
        </div>
        {showZenpay && (
          <div className="search-container">
            <div className="search-input">
              <img src={searchIcon} alt="Search Icon" className="search-icon" />
              <input
                type="text"
                placeholder="Search for any merchant"
                className="search-field"
              />
            </div>
            <div className="main-menu">
              <span className="main-menu-text">Main Menu</span>
              <div className="home-section">
                <div className="home-icon">
                  <img
                    src={homeIcon}
                    alt="Home Icon"
                    className="home-icon-img"
                  />
                </div>
                <span className="home-text">Home</span>
              </div>
              <div className="about-section">
                <div className="about-icon">
                  <img
                    src={aboutIcon}
                    alt="About Icon"
                    className="about-icon-img"
                  />
                </div>
                <span className="about-text">About Us</span>
              </div>
              <div className="contact-more-section">
                <div className="contact-icon">
                  <img
                    src={contactIcon}
                    alt="Contact Icon"
                    className="contact-icon-img"
                  />
                </div>
                <span className="contact-text">Contact Us</span>
                <span className="more-text">More</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="navbar-links">
        <div className="home-link-container">
          <a href="#home" className="home-link">
            Home
          </a>
          <div className="stroke">
            <img src={underlineIcon} alt="Underline Icon" />
          </div>
        </div>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </div>

      <div className="navbar-search">
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
        <input type="text" placeholder="Search for any merchant" />
      </div>
      <div className="navbar-auth">
        <a href="#login">Login</a>
        <a href="#signup">Sign Up</a>
      </div>
    </nav>
  );
}
