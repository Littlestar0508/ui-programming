import React from "../lib/react.js";
import Box from "./box.js";

const { createElement: h, Fragment } = React;

function App() {
  return h(
    "div",
    { className: "app" },
    h(Box, null, "기본 박스"),
    h(Box, null, "작은 박스"),
    h(Box, null, "큰 박스")
  );
}

export default App;
