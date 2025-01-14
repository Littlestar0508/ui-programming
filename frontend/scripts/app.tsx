import React from "../lib/react.js";
import Switch from "../components/switch.tsx";
import SwitchList from "../components/switch-list.tsx";
import type { ListItem, List } from "../types/list.ts";

function App(): React.ReactNode {
  const handleSwitch1Toggle = () => console.log("clicked switch 1");
  const handleSwitch3Toggle = () => console.log("clicked switch 3");

  // 데이터 추출
  const list: List = [
    { active: true, children: "Wi-Fi", onToggle: handleSwitch1Toggle },
    { children: "Bluetooth" },
    { disabled: true, children: "Reduced Motion", onToggle: handleSwitch3Toggle },
  ];

  const renderListItemElements: Array<ListItem> = [];

  // for 문을 사용한 리스트 렌더링
  // for (let i: number = 0, l: number = list.length; i < l; ++i) {
  //   const listItem: ListItem = list[i];

  //   renderListItemElements.push(
  //     // React Element
  //     <Switch
  //       active={listItem.active}
  //       disabled={listItem.disabled}
  //       showOnOffText={listItem.showOnOffText}
  //       onToggle={listItem.onToggle}
  //     >
  //       {listItem.children}
  //     </Switch>
  //   );
  // }

  // renderListItemElements.push(
  //   <Switch active showOnOffText>
  //     REAd a BOOK
  //   </Switch>
  // );

  return (
    <div lang="en" style={appStyles}>
      <SwitchList items={list} />
      {/* <SwitchList></SwitchList> */}
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
