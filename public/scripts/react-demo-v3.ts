/* ------------------------ React Programming Preview ----------------------- */

import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";

// NameSpace.module
// React.Fragment(function)
console.log(React.fragment);

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

// 의미없는 <div> 대신에 <React.Fragment>를 사용
// 의미없는 구조는 실제 DOM에 렌더링 X
const wrapper = React.createElement(React.Fragment, { role: "group" }, heading, changeButton);

// console.group("React 요소 노드");
// console.dir(heading);
// console.dir(changeButton);
// console.groupEnd();

// ReactDOM API (for Web)
// ReactDOM.createRoot(domElement) -> ReactDOMRoot {render , unmount}
const rootElement = document.getElementById("react"); // HTMLDivElement
const reactDomRoot = ReactDOM.createRoot(rootElement); // ReactDOMRoot

// ReactDOMRoot.render(React.ReactElement)
reactDomRoot.render(wrapper);

// React Native API (for Mobile Native)

// 코드(React Element)를 재사용하자
// 리액트 월드 재사용 메커니즘 : 컴포넌트(함수)
{
  const heading = React.createElement("h1", {} /* 속성X */, "안녕!" /* children */);
  const changeButton = React.createElement("button", { type: "button" }, "인사말");

  // 일반 함수로 생각
  // 재사용 메커니즘 : 클래스 또는 함수(가벼운건 함수)
  function add(a: number, b: number): number {
    return a + b;
  }

  add(10, 40);
  add(5, 55);
}
