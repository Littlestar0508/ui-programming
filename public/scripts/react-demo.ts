/* ------------------------ React Programming Preview ----------------------- */

import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";
import createElement from "./../lib/own/own-createElement-demo";

// React Version
// console.log("React Version = ", React.version);

// ReactDOM/client version
// console.log("ReactDOM Version = ", ReactDOM.version);

/* -------------------------------------------------------------------------- */
/*                            Creating Element Node                           */
/* -------------------------------------------------------------------------- */

// React API
// React.createElement(type, props(속성들의 집합) , ...children)

const heading = React.createElement("h1", {} /* 속성X */, "안녕!" /* children */);
const changeButton = React.createElement("button", { type: "button" }, "인사말");

const parentElement = React.createElement("div", { role: "group" }, heading, changeButton);

// console.group("React 요소 노드");
// console.dir(heading);
// console.dir(changeButton);
// console.groupEnd();

// ReactDOM API (for Web)
// ReactDOM.createRoot(domElement) -> ReactDOMRoot {render , unmount}
const rootElement = document.getElementById("react"); // HTMLDivElement
const reactDomRoot = ReactDOM.createRoot(rootElement); // ReactDOMRoot

// ReactDOMRoot.render(React.ReactElement)
reactDomRoot.render(parentElement);

// React Native API (for Mobile Native)
