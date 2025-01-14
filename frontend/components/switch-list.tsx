import React from "../lib/react.js";
import Switch from "./switch.tsx";
import type { List } from "../types/list.ts";

// HTML 표준 목록 요소(ul, ol, dl)
interface SwitchListProps {
  items: List;
}

function SwitchList(props: SwitchListProps) {
  // 리스트 렌더링 02
  // Array.prototype.map (O) : 반환값 존재
  // Array.prototype.forEach(X) : 반환 값 X

  const renderListItmes = props.items.map((item) => {
    // React.ReactElement[] 반환 => React Children
    return (
      <li>
        <Switch
          active={item.active}
          disabled={item.disabled}
          showOnOffText={item.showOnOffText}
          onToggle={item.onToggle}
        >
          {item.children}
        </Switch>
      </li>
    );
  });

  return (
    <ul className="SwitchList" style={{ display: "flex", flexFlow: "column", gap: 12 }}>
      {renderListItmes}
    </ul>
  );
}

export default SwitchList;
