import React from "../lib/react.js";
import Box from "./box.js";

const { createElement: h, Fragment } = React;

function App() {
  return h(
    "div",
    { className: "app" },
    h(Box, { className: "box--circle" }, "기본 박스"),
    h(Box, { size: "small", style: { backgroundColor: "#0388d1" } }, "작은 박스"),
    h(Box, { size: "big", style: { backgroundColor: "#1ecff6", borderRadius: 20 } }, "큰 박스")
  );
}

export default App;
