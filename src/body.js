import React from 'react'

export default function body() {
  return (
    <div className="flex flex-col gap-[206px] md:gap-[154px] sm:gap-[103px]">
      <div className="flex flex-col items-center gap-[90px] md:-[67px] sm:gap-[45px]">
        <div className="mx-auto flex w-full max-w-[1352px] items-center self-stretch md:-col md:p-5">
          <div className="flex w-[36%] flex-col items-start self-end md:w-full md:self-auto">
            <Heading
              size="headingmd"
              as="h1"
              className="relative z-[1] w-[88%] leading-[99.8%] tracking-[-0.87px] md:w-full"
            >
              <span className="font-bold text-[#4e1c4e] font-hind-vadodara text-[87px] leading-[86.83px] tracking-[-0.01em] text-left">
                <>
                  Creativity
                  <br />
                </>
              </span>
              <span className="font-light text-[#331b3b] font-hind-vadodara text-[87px] leading-[86.83px] tracking-[-0.01em] text-left">
                Meets Community
              </span>
            </Heading>
            <div className="relative mt-[-4px] h-[20px] w-[84%] bg-[#fdc221]" />
            <Text
              size="textmd"
              as="p"
              className="mt-[30px] w-[82%] leading-[146.3%] tracking-[0.36px] !text-[#331b3ba8] md:w-full"
              style={{
                fontFamily: "Hind Vadodara, sans-serif",
                fontSize: "87px",
                fontWeight: 300,
                lineHeight: "86.83px",
                letterSpacing: "-0.01em",
                textAlign: "left",
              }}
            >
              CreativeHub is your ultimate online destination for artists,
              writers, musicians, designers, and all creative souls. We provide
              a platform where your ideas can flourish, your talents can shine,
              and your passions can connect with a like-minded community.
            </Text>

            <div className="mt-[22px] self-stretch py-3.5">
              <div className="mb-[18px] flex flex-col items-start gap-3.5">
                <Text size="textmd" as="p" className="!text-[#000000]">
                  Download now for the ultimate convenience
                </Text>
                <div className="flex gap-[7px] self-stretch">
                  <a href="#">
                    <img
                      src={googlePlayImage}
                      alt="Google Play"
                      className="h-[92px] w-[320px] rounded-md object-contain"
                    />
                  </a>
                  <img
                    src={googlePlayImage}
                    alt="Google Play"
                    className="h-[92px] w-[320px] rounded-md object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-2.5 h-[730px] flex-1 md:w-full md:flex-none md:self-stretch">
            <Img
              src={vector1}
              alt="vector"
              className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[752px] w-[50%] object-cover"
            />
            <Img
              src={ImagVector}
              alt="Top Graphic"
              className="absolute bottom-0 left-0 right-0 m-auto h-auto w-[40%] max-h-[620px] object-contain"
            />
            <div className="absolute bottom-[22%] left-[7%] m-auto h-[490px] w-[40%] rounded-[220px] border-2 border-dashed border-[#000000]" />
            <Img
              src={ImageMaskGroup}
              alt="Masked Image"
              className="absolute bottom-[11.50px] left-0 right-0 m-auto h-[548px] w-[58%] object-cover"
            />
          </div>
        </div>
        {/* <FeaturesSection/> */}
      </div>
      <Footer />
    </div>
  );
}
