import { Heading } from "../Heading/Index";
import { Text } from "../Text";
import { Button } from "../Button";
import { Img } from "../Img";
import React from "react";
import ImgLogo from "../../assets/images/img_logo.svg";
import search from "../../assets/images/icons8-search-30.png";

export default function Header(props) {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <header
        {...props}
        className={`${props.className} flex flex-col md:flex-row justify-between items-center`}
      >
        <div className="flex items-center gap-20">
          <div className="h-[40px] w-[130px]">
            <Img src={ImgLogo} alt="Company Logo" className="h-full w-full" />
          </div>
          <ul className="flex items-center gap-8 ml-12">
            {" "}
            {/* Adjust margin-left for spacing */}
            <li>
              <a href="#">
                <div className="flex flex-col items-start">
                  <Heading
                    as="h6"
                    className="!font-['Montserrat'] !text-[#4e1c4e]"
                  >
                    Home
                  </Heading>
                  <div className="h-[2px] w-[22px] bg-[#fdc221]" />
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Text as="p" className="hover:font-bold">
                  About Us
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Text as="p" className="hover:font-bold">
                  Contact Us
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <Button shape="round" className="flex items-center rounded-[7px]">
            <Img
              src={search}
              alt="Search"
              className="h-[20px] w-[20px] text-[#fdc221]"
            />
            <span>Search for any merchant</span>
          </Button>

          <ul className="flex gap-5 md:gap-12">
            <li>
              <a href="#">
                <Text as="p">Login</Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p">Sign Up</Text>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
