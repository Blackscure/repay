import { Heading } from "../Heading/Index";
import { Text } from "../Text";
import { Button } from "../Button";
import { Img } from "../Img";
import React from "react";
import ImgLogo from "../../assets/images/img_logo.svg";
import searchIcon from "../../assets/images/Search.svg";
import "./Header.css";

export default function Header(props) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ImgLogo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="#home" className="home-link">
          Home
        </a>
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
