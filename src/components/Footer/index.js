import React from "react";
import { Heading } from "../Heading/Index";
import { Img } from "../Img";
import { Text } from "../Text";
import FooterImg from "../../assets/images/img_footer_logo.png";

export default function Footer({ className, ...props }) {
  return (
    <footer
      {...props}
      className={`${className} flex justify-center items-center p-12 md:p-5 rounded-tr-[118px] bg-[#4e1c4e]`}
    >
      <div className="mx-auto flex w-full max-w-[1122px] items-center justify-between gap-5 md:flex-col">
        <div className="flex w-[38%] flex-col gap-2 md:w-full">
          <Img
            src={FooterImg}
            alt="Footer Logo"
            className="h-[52px] w-[122px] object-contain"
          />
          <Text
            size="texts"
            as="p"
            className="leading-[146.3%] tracking-[0.34px] text-white"
            style={{
              fontFamily: "Hind Vadodara, sans-serif", // Make sure to import the font
            }}
          >
            <>
              We provide a platform where your ideas can flourish, your talents
              can shine, and your passions can connect with a like-minded
              community.
              <br />
              <br />
            </>
          </Text>
        </div>
        <div className="flex w-[30%] flex-col gap-1.5 self-start md:w-full md:self-auto">
          <div className="flex items-center gap-[25px]">
            <Img
              src="images/img_carbon_location_filled.svg"
              alt="Location Icon"
              className="h-[24px] w-[24px]"
            />
            <Text as="p" className="text-white">
              15464 - 00100 Nairobi, Kenya
            </Text>
          </div>
          <div className="flex w-[54%] flex-col gap-1.5 md:w-full">
            <div className="flex items-center gap-6">
              <Img
                src="images/img_ic_sharp_email.svg"
                alt="Email Icon"
                className="h-[24px] w-[24px]"
              />
              <Text as="p" className="self-end text-white">
                +254 734 789
              </Text>
            </div>
          </div>
        </div>
        <div className="flex w-[18%] flex-col items-start gap-3.5 md:w-full">
          <Heading
            as="h6"
            className="font-semibold uppercase tracking-[0.32px] text-white"
          >
            Follow us
          </Heading>
          <Img
            src="images/img_frame_1171276259.png"
            alt="Social Icon"
            className="mb-[68px] h-[30px] object-cover"
          />
        </div>
      </div>
    </footer>
  );
}
