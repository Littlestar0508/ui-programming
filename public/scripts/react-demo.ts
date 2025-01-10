/* ------------------------ React Programming Preview ----------------------- */

import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";

/* -------------------------------------------------------------------------- */
/*                            Creating Element Node                           */
/* -------------------------------------------------------------------------- */

// 리액트 엘리먼트(반환될 값)
const heading = React.createElement("h1", {} /* 속성X */, "안녕!" /* children */);
const changeButton = React.createElement("button", { type: "button" }, "인사말");

const wrapper = React.createElement(React.Fragment, { role: "group" }, heading, changeButton);

const rootElement = document.getElementById("react"); // HTMLDivElement
const reactDomRoot = ReactDOM.createRoot(rootElement); // ReactDOMRoot

reactDomRoot.render(wrapper);
