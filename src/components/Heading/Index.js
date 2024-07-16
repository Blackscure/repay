import React from "react";


const sizes = {
  headingxs: "text-base font-bold",
  headings: "text-5xl font-bold md:text-[44px] sm:text-38px]",
  headingmd: "text-[87px]  font-semibold md:text-5xl"
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-[#331b3b] font-['Hind_Vadodara'] ${className} ${sizes[size]} {...restProps}`}>
      {children}
    </Component>
  );
};

export { Heading };