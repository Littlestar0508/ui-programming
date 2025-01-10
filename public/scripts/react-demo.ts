/* ------------------------ React Programming Preview ----------------------- */

import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";

/* -------------------------------------------------------------------------- */
/*                            Creating Element Node                           */
/* -------------------------------------------------------------------------- */

function Heading() {
  return React.createElement("h1", { children: "안녕!" });
}

function ChangeButton() {
  return React.createElement("button", { type: "button", children: "인사말" });
}

function Wrapper() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading),
    React.createElement(ChangeButton)
  );
}

const rootElement = document.getElementById("react"); // HTMLDivElement
const reactDomRoot = ReactDOM.createRoot(rootElement); // ReactDOMRoot

reactDomRoot.render(React.createElement(Wrapper));
