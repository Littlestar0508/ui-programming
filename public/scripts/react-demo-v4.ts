/* ------------------------ React Programming Preview ----------------------- */

import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";

/* -------------------------------------------------------------------------- */
/*                            Creating Element Node                           */
/* -------------------------------------------------------------------------- */

// 리액트 엘리먼트(반환될 값)
const heading = React.createElement("h1", {} /* 속성X */, "안녕!" /* children */);
const changeButton = React.createElement("button", { type: "button" }, "인사말");

// 리액트 컴포넌트(naming convention : PascalCase)
function HeadingOne() {
  // 리액트 엘리먼트 (생성 후) 반환
  return React.createElement("h1", {}, "안녕!");
  // return React.createElement("h1", { children: "안녕!" }); 도 같은 의미이다
}

for (let i = 0; i < 5; i++) {
  // 컴포넌트를 사용해 React Element를 재사용할 수 있다
  console.log(React.createElement(HeadingOne));
}

const wrapper = React.createElement(React.Fragment, { role: "group" }, heading, changeButton);

const rootElement = document.getElementById("react"); // HTMLDivElement
const reactDomRoot = ReactDOM.createRoot(rootElement); // ReactDOMRoot

reactDomRoot.render(wrapper);
