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
  // HTML Event Binding
  // <button type='button' onclick='function()'>인사말</button>

  // React Event Binding ( e.g : onClick 카멜 케이스)
  return React.createElement("button", {
    type: "button",
    onClick: () => {
      // 버튼을 클릭할 때 마다 리액트 앱을 re-rendering
      render();
    },
    children: "인사말",
  });
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

function render() {
  const keys = Object.keys(Greeting);
  const key = keys[Math.floor(Math.random() * keys.length)];

  // 재조정(이전에 렌더링 했던 ReactDOM Tree와 다시 렌더링 하는 ReactDOM Tree 비교 , 변경이 있다면 DOM에 commit)
  reactDomRoot.render(
    React.createElement(Wrapper, {
      message: Greeting[key],
    })
  );
}

render();
