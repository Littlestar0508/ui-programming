import React from "../lib/react.js";
import Calculator from "./calculator";

function App() {
  return React.createElement("div", {
    className: "app",
    children: [
      React.createElement(Calculator),
      React.createElement(Calculator, { elements: [10, 2] }),
      React.createElement(Calculator, { operator: "+", elements: [10, 2] }),
    ],
  });
}

export default App;
