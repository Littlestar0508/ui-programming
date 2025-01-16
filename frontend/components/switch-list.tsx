import React from "../lib/react.js";
import type { List } from "../types/list.ts";
import Switch from "./switch.tsx";

interface SwitchListProps {
  items: List;
}

const switchStyles = {
  display: "flex",
  flexFlow: "column",
  gap: 12,
  listStyle: "none",
  paddingInlineStart: 0,
};

function SwitchList({ items }: SwitchListProps) {
  // React 컴포넌트 상태관리
  // React Hooks API(React.useState)
  // true or false 상태
  const [submission, setSubmission] = React.useState(false);

  return (
    <ul className="SwitchList" style={switchStyles}>
      <li>
        <Switch
          active={submission}
          onToggle={() => {
            // 상태 업데이트 (React에 요청 : trigger a render)
            setSubmission(!submission);
          }}
        >
          상태 변경
        </Switch>
      </li>
      {renderListItems(items)}
    </ul>
  );
}

const renderListItems = (items: List): React.ReactElement[] => {
  return items.map((item) => {
    // React.ReactElement[] 반환 === React Children
    return (
      <li key={item.id}>
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
};

export default SwitchList;
