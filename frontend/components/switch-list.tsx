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

  // [관심사] 과제 제출상태 & 상태 업데이트 로직
  const [submission, setSubmission] = React.useState(false);
  const handleToggleSubmission = () => {
    // 상태 업데이트 (React에 요청: trigger a render)
    const nextSubmission = !submission; // false <=> true
    setSubmission(nextSubmission);
  };

  // [관심사] 복습 수행 상태 & 상태 업데이트 로직
  const [review, setReview] = React.useState(false);
  const handleToggleReview = () => {
    // 상태 업데이트 (React에 요청: trigger a render)
    const nextReview = !review; // false <=> true
    setReview(nextReview);
  };

  // [관심사] 나의 수준 파악 상태 & 상태 업데이트 로직
  const [level, setLevel] = React.useState(false);
  const handleToggleLevel = () => {
    const nextLevel = !level;
    setLevel(nextLevel);
  };

  return (
    <ul className="SwitchList" style={switchStyles}>
      <li>
        <Switch active={submission} onToggle={handleToggleSubmission}>
          과제 제출
        </Switch>
      </li>
      <li>
        <Switch active={review} onToggle={handleToggleReview}>
          유의미한 복습 수행
        </Switch>
      </li>
      <li>
        <Switch active={level} onToggle={handleToggleLevel}>
          정확한 나의 수준 진단
        </Switch>
      </li>
      {/* 조건부 표시(Conditional Display) */}
      {items.map((item) => (
        <li key={item.id} hidden>
          <Switch
            active={item.active}
            disabled={item.disabled}
            showOnOffText={item.showOnOffText}
            onToggle={item.onToggle}
          >
            {item.children}
          </Switch>
        </li>
      ))}

      {/* 조건부 렌더링(Conditional Rendering) */}
      {false &&
        items.map((item) => (
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
        ))}
    </ul>
  );
}

export default SwitchList;
