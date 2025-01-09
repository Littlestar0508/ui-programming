/* ------------------------ React Programming Preview ----------------------- */

import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";

// React Version
// console.log("React Version = ", React.version);

// ReactDOM/client version
// console.log("ReactDOM Version = ", ReactDOM.version);

/* -------------------------------------------------------------------------- */
/*                            Creating Element Node                           */
/* -------------------------------------------------------------------------- */

// React API
// React.createElement(type, props(속성들의 집합) , ...children)

const heading = React.createElement("h1", {} /* 속성X */, "안녕!");
const changeButton = React.createElement("button", { type: "button" }, "인사말");

console.group("React 요소 노드");
console.dir(heading);
console.dir(changeButton);
console.groupEnd();
