import React from "../lib/react.js";

function Box({ children }: { children: React.ReactNode }) {
  return React.createElement(
    "div",
    {
      className: "box",
      style: {
        backgroundColor: "#1e2433",
        color: "white",
      },
    },
    // ...children
    children
  );
}

export default Box;
