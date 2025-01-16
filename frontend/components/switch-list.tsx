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

  // 좀 더 복잡한 구조의 상태(객체)
  const [state, setState] = React.useState({
    submission: false,
    review: false,
    level: false,
  });
  // // 각 상태 업데이트 로직
  // const handleToggleSubmission = () => {
  //   // setState() 함수에 새 데이터 전달(기존 데이터 덮어씀)
  //   // 기존 데이터가 사라지는 것을 원치 않는다
  //   // 객체 합성 패턴
  //   const nextState = { ...state, submission: !state.submission };
  //   setState(nextState);
  // };
  // const handleToggleReview = () => {
  //   // setState() 함수에 새 데이터 전달(기존 데이터 덮어씀)
  //   const nextState = { ...state, review: !state.review };
  //   setState(nextState);
  // };
  // const handleToggleLevel = () => {
  //   // setState() 함수에 새 데이터 전달(기존 데이터 덮어씀)
  //   const nextState = { ...state, level: !state.level };
  //   setState(nextState);
  // };

  const handleStateToggle = (name: string) => {
    // JS 객체는 [계산된] 속성을 가질 수 있다
    let stateName = name;
    const nextState = { ...state, [stateName]: !state[stateName] };
    setState(nextState);
  };

  return (
    <ul className="SwitchList" style={switchStyles}>
      <li>
        <Switch active={state.submission} onToggle={() => handleStateToggle("submission")}>
          과제 제출
        </Switch>
      </li>
      <li>
        <Switch active={state.review} onToggle={() => handleStateToggle("review")}>
          유의미한 복습 수행
        </Switch>
      </li>
      <li>
        <Switch active={state.level} onToggle={() => handleStateToggle("level")}>
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
