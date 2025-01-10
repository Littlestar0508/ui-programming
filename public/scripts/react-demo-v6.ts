/* ------------------------ React Programming Preview ----------------------- */

import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";
import greetingMessage from "./../../src/middlewares/greetingMessage";

/* -------------------------------------------------------------------------- */
/*                            Creating Element Node                           */
/* -------------------------------------------------------------------------- */

function Heading(props: { greetingMessage: string }): React.ReactElement {
  return React.createElement("h1", {}, props.greetingMessage);
}

function ChangeButton() {
  return React.createElement("button", { type: "button", children: "인사말" });
}

function Wrapper() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading, { greetingMessage: "안녕!" }),
    React.createElement(ChangeButton)
  );
}

const rootElement = document.getElementById("react"); // HTMLDivElement
const reactDomRoot = ReactDOM.createRoot(rootElement); // ReactDOMRoot

reactDomRoot.render(React.createElement(Wrapper));

// 효과적인 함수의 재사용(유용성)
function add(a: number, b: number): number {
  // let a = 1;
  // let b = 2;
  // 비효율적

  return a + b;
}

// 효과적인 리액트 컴포넌트(함수)의 재사용(유용성)
// 리액트 컴포넌트가 외부에서 []을 전달 받아야한다

function HeadingDemo(props: { elementName: string; content: string }): React.ReactElement {
  // let elementName = 'h1';
  // let content = '안녕';

  return React.createElement(props.elementName, {}, props.content);
}

const element1 = React.createElement(HeadingDemo, {
  elementName: "h1",
  content: "안녕!",
});
const element2 = React.createElement(HeadingDemo, {
  elementName: "p",
  content: "안녕하세용!! 오늘은 즐거운 금요일임다!",
});

console.log(element1);
console.log(element2);
