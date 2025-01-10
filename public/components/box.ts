import React from "../lib/react.js";

interface BoxProps {
  // 필수(required)
  children: React.ReactNode;

  // 선택(optional)
  style?: Record<string, string | number>;
  size?: "small" | "big";
  className?: string;
}

function Box({ children, size, style, className = "" }: BoxProps) {
  let sizeClassName = "";
  if (size) {
    sizeClassName = `box--${size}`;
  }

  const classNames = `box ${sizeClassName} ${className}`.trim();

  return React.createElement(
    "div",
    {
      className: classNames,
      style: {
        backgroundColor: "#171c28",
        color: "white",
        ...style,
      },
    },
    // ...children
    children
  );
}

export default Box;
