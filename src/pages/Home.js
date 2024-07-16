import React from "react";
// import { Helmet } from "react-helmet"; // Correct the spelling if you want to use this
import Header from "../components/Header";
import { Heading } from "../components/Heading/Index";
import { Text } from "../components/Text"
import { Img } from "../components/Img";
import Footer from "../components/Footer";
import googlePlayImage from '../assets/images/google-play.png'
import ImageMaskGroup from '../assets/images/img_mask_group.png'
import ImagVector from '../assets/images/img_vector_13.svg'
import vector1 from '../assets/images/img_vector_1.png'
import '../App.css'

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
        
      </div>
    </>
  );
}
