import React from 'react'

const sizes = {
  textxs: "text-base font-normal not-italic",
  texts: "text-[17px] font-normal not-italic",
  textmd: "text-lg font-normal not-italic",
};

const Text = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-[#4e1c4e] font-['Montserrat'] ${className} ${sizes[size]} {...restProps}`}
    >
      {children}
    </Component>
  );
};

export { Text };