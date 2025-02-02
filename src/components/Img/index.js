import React from "react";

const Img = ({ className, src = "defaultNodata.png", alt = "testImg", ...restProps }) => {
  return <img className={className} src={src} alt={alt} {...restProps} loading={"lazy"} />
};

export { Img };