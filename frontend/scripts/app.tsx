import React from "../lib/react.js";
import Switch from "../components/switch.tsx";

function App(): React.ReactNode {
  const handleSwitch1Toggle = () => console.log("clicked switch 1");
  const handleSwitch3Toggle = () => console.log("clicked switch 3");

  type ListItem = {
    active?: boolean;
    disabled?: boolean;
    showOnOffText?: boolean;
    children: React.ReactNode;
    onToggle?: () => void;
  };

  type List = ListItem[];

  // 데이터 추출
  const list: List = [
    { active: true, children: "Wi-Fi", onToggle: handleSwitch1Toggle },
    { children: "Bluetooth" },
    { disabled: true, children: "Reduced Motion", onToggle: handleSwitch3Toggle },
  ];

  const renderListItemElements: Array<ListItem> = [];

  // for 문을 사용한 리스트 렌더링
  for (let i: number = 0, l: number = list.length; i < l; ++i) {
    const listItem: ListItem = list[i];

    renderListItemElements.push(
      // React Element
      <section>
        <h2>{listItem.children}</h2>
        <p>active : {listItem.active?.toString()}</p>
        <p>disabled : {listItem.disabled?.toString()}</p>
        <p>showOnOffText : {listItem.showOnOffText?.toString()}</p>
        <p>onToggle : {listItem.onToggle?.toString()}</p>
      </section>
    );
  }

  // React Children(React Element List)
  console.log({ renderListItemElements });

  return (
    <div lang="en" style={appStyles}>
      {renderListItemElements}
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
