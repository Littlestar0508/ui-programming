import React from "../lib/react.js";
import Switch from "../components/switch.tsx";
import jsxRuntime from "../lib/react/jsx-runtime.js";

const { jsx, Fragment } = jsxRuntime;

const appStyles = {
  display: "flex",
  flexFlow: "column",
  gap: 12,
  padding: 20,
};

function App(): React.ReactNode {
  const handleSwitch1Toggle = () => console.log("clicked switch 1");
  const handleSwitch3Toggle = () => console.log("clicked switch 3");

  return (
    <div lang="en" style={appStyles}>
      <Switch active onToggle={handleSwitch1Toggle}>
        Wi-Fi
      </Switch>
      <Switch>Bluetooth</Switch>
      <Switch disabled onToggle={handleSwitch3Toggle}>
        Reduced Motion
      </Switch>
      <ul>
        <li>child1</li>
        <li>child2</li>
        <li>child3</li>
      </ul>

      {jsx("ul", {
        className: "jsx-ul",
        children: [
          jsx("li", { children: "chid 1" }, "child-1"),
          jsx("li", { children: "chid 2" }, "child-2"),
          jsx("li", { children: "chid 3" }, "child-3"),
        ],
      })}
    </div>
  );
}

export default App;
