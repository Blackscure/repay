import React from "react";
import { Heading } from "../Heading/Index";
import { Img } from "../Img";
import { Text } from "../Text";
import FooterImg from "../../assets/images/img_footer_logo.png";
import locationIcon from "../../assets/images/carbon_location-filled.svg"
import  emailIcon from "../../assets/images/ic_sharp-email.svg";
import phoneIcon from "../../assets/images/bxs_phone-call.svg";
import groupIcon1 from "../../assets/images/Group 1000001749.svg";
import groupIcon2 from "../../assets/images/Group 1000001750.svg";
import groupIcon3 from "../../assets/images/Group 1000001753.svg";
import "./footer.css";

export default function Footer({ className, ...props }) {
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="footer-header">
          <span className="footer-title">TipSource</span>
        </div>
        <div className="footer-description">
          <p>
            We provide a platform where your ideas can flourish, your talents
            can shine, and your passions can connect with a like-minded
            community.
          </p>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-contact">
          <div className="footer-contact-item">
            <img
              src={locationIcon}
              alt="Location Icon"
              className="footer-icon"
            />
            <span className="footer-text">Your Location</span>
          </div>
          <div className="footer-contact-item">
            <img src={emailIcon} alt="Email Icon" className="footer-icon" />
            <span className="footer-text">ZenPay@gmail.com</span>
          </div>
          <div className="footer-contact-item">
            <img src={phoneIcon} alt="Phone Icon" className="footer-icon" />
            <span className="footer-text">+254 734 789</span>
          </div>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-social">
          <img
            src={groupIcon1}
            alt="Group Icon 1"
            className="footer-social-icon"
          />
          <img
            src={groupIcon2}
            alt="Group Icon 2"
            className="footer-social-icon"
          />
          <img
            src={groupIcon3}
            alt="Group Icon 3"
            className="footer-social-icon"
          />
        </div>
      </div>
    </footer>
  );
}
