/* ------------------------ React Programming Preview ----------------------- */

import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";
import { Greeting } from "./greeting";

/* -------------------------------------------------------------------------- */
/*                            Creating Element Node                           */
/* -------------------------------------------------------------------------- */

function Heading(props: { greetingMessage: string }): React.ReactElement {
  return React.createElement("h1", {}, props.greetingMessage);
}

function ChangeButton() {
  return React.createElement("button", { type: "button", children: "인사말" });
}

function Wrapper(props: { message: string }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading, { greetingMessage: props.message }),
    React.createElement(ChangeButton)
  );
}

const rootElement = document.getElementById("react"); // HTMLDivElement
const reactDomRoot = ReactDOM.createRoot(rootElement); // ReactDOMRoot

// 랜덤 인사말 출력
const keys = Object.keys(Greeting);
const key = keys[Math.floor(Math.random() * keys.length)];

reactDomRoot.render(
  React.createElement(Wrapper, {
    message: Greeting[key],
  })
);
