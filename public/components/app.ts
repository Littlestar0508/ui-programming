import React from "../lib/react.js";
import Calculator from "./calculator";

function App() {
  return React.createElement("div", {
    className: "app",
    children: [
      React.createElement(Calculator),
      React.createElement(Calculator, { key: "child-2" }),
      React.createElement(Calculator, { key: "child-3", elements: [, 2] }),
      React.createElement(Calculator, { key: "child-4", operator: "*", elements: [-12, 2] }),
    ],
  });
}

export default App;
