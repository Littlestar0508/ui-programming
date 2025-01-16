import React from "../lib/react.js";
import SwitchList from "../components/switch-list.tsx";

function App(): React.ReactNode {
  const list = [
    {
      active: true,
      onToggle: () => console.log("clicked switch 1"),
      children: "와이파이(Wi-Fi)",
    },
    {
      children: "블루투스(Bluetooth)",
    },
    {
      disabled: true,
      onToggle: () => console.log("clicked switch 3"),
      children: "동작 줄이기(Reduced Motion)",
    },
    {
      children: "스크린 리더(Screen Reader)",
      active: true,
    },
  ];

  return (
    <div lang="en" style={appStyles}>
      <SwitchList items={list} />
    </div>
  );
}

const appStyles = {
  display: "flex",
  flexFlow: "column",
  gap: 12,
  padding: 20,
};

export default App;
