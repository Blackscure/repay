import React, { Children } from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "round-[12px]",
};

const variants = {
  fill: {
    gray_800_01: "bg-[#4e1c4e] text-[#ffffffb7]",
  },
};

const sizes = {
  xs: "h-[50px] pl-6 pr-[30px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_800_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center  gap-3 text-center cursor-pointer text-[#ffffffb7] text-base bg-[#4elc4e] min-w-[284px] round-[12px]  ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variants && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_800_01"]),
};

export { Button };