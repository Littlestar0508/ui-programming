/* ------------------------ React Programming Preview ----------------------- */

import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";

/* -------------------------------------------------------------------------- */
/*                            Creating Element Node                           */
/* -------------------------------------------------------------------------- */

// 리액트 엘리먼트(반환될 값)

// Heding 컴포넌트
// const heading = React.createElement("h1", {} /* 속성X */, "안녕!" /* children */);

function Heading() {
  return React.createElement("h1", { children: "안녕!" });
}

// ChangeButton 컴포넌트
// const changeButton = React.createElement("button", { type: "button" }, "인사말");

function ChangeButton() {
  return React.createElement("button", { type: "button", children: "인사말" });
}

// Wrapper 컴포넌트
// const wrapper = React.createElement(React.Fragment, { role: "group" }, heading, changeButton);

function Wrapper() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading),
    React.createElement(ChangeButton),
    React.createElement(Heading),
    React.createElement(ChangeButton),
    React.createElement(Heading),
    React.createElement(ChangeButton),
    React.createElement(Heading),
    React.createElement(ChangeButton),
    React.createElement(Heading),
    React.createElement(ChangeButton),
    React.createElement(Heading),
    React.createElement(ChangeButton)
  );
}

const rootElement = document.getElementById("react"); // HTMLDivElement
const reactDomRoot = ReactDOM.createRoot(rootElement); // ReactDOMRoot

// React Element Rendering
// reactDomRoot.render(wrapper);

reactDomRoot.render(React.createElement(Wrapper));
