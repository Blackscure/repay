import React from "react";
// import { Helmet } from "react-helmet"; // Correct the spelling if you want to use this
import Header from "../components/Header";
// import { Heading } from "../components/Heading/Index";
// import { Text } from "../components/Text"
// import { Img } from "../components/Img";
// import Footer from "../components/Footer";
// import googlePlayImage from '../assets/images/google-play.png'
import ImageMaskGroup from '../assets/images/img_mask_group.png'
// import ImagVector from '../assets/images/img_vector_13.svg'
// import vector1 from '../assets/images/img_vector_1.png'

import underlineIcon from "../assets/images/Vector 6.svg";
import googlePlayImage from "../assets/images/image 6.png";
import appStoreImage from "../assets/images/image 7.svg";
// import creamBackgroundImage from "../assets/images/img_vector_1.png";
// import purpleVectorImage from "../assets/images/img_vector_13.svg";
// import famImage from "../assets/images/two-people-using-laptop-meeting-coffee-shop 1.png";
import './Home.css';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* <Helmet>
        <title>Home - Unleash Your Creativity with Creativity</title>
        <meta
          name="description"
          content="Discover Creative, the ultimate online destination for artists and creatives. Connect with a community that celebrates your ideas, talents, and passions. Download the ZenPay app for a seamless financial experience."
        />
      </Helmet> */}
      <div className="w-full bg-[#ffffff]">
        <Header />
        <div className="main-container">
          <div className="left-section">
            <div className="creativity-community">
              <span className="creativity">Creativity</span>
              <span className="meets-community">Meets Community</span>
              <div className="stroke">
                <img src={underlineIcon} alt="Underline Icon" />
              </div>
            </div>
            <div className="creative-hub">
              <p>
                CreativeHub is your ultimate online destination for artists,
                writers, musicians, designers, and all creative souls. We
                provide a platform where your ideas can flourish, your talents
                can shine, and your passions can connect with a like-minded
                community.
              </p>
            </div>
            <div className="download-now">
              <p>Download now for the ultimate convenience!</p>
              <div className="store-icons">
                <img src={googlePlayImage} alt="Google Play" />
                <img src={appStoreImage} alt="App Store" />
              </div>
            </div>
          </div>
          {/* <div className="right-section">
            <div className="cream-image"></div>
            <div className="purple-image"></div>
            <div className="background-image"></div>
            <div className="dashed-border"></div>
          </div> */}
        </div>
        <Footer/>
      </div>
    </>
  );
}
