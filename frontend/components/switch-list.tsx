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
  // 전달된 속성(props) -> 제어할 상태(state)로 전환
  // 사용자와 상호작용(interaction)하는 인터페이스(UI) 설계 가능

  // React 컴포넌트의 상태는 훅(Hooks) API 사용
  // [상태 선언] React.useState(initialValue)

  const [state, setState] = React.useState(() => {
    // 컴포넌트가 초기 생성될 때 1회 실행
    // 컴포넌트의 상태로 사용할 초깃값 반환
    // 단, 개발 모드에서는 StrictMode 사용 시 2회 호출됨
    // 배포 시, 1회만 실행
    // 초기화 함수에서 할 일
    // 속성(읽기 전용) -> 상태(컴포넌트 안에서 일기/쓰기 가능)
    // console.log({ props: { items } });

    return items.map(({ onToggle, ...restProperties }) => ({
      active: false,
      disabled: false,
      ...restProperties,
    }));
  });

  // 하나의 함수를 사용해 사용자의 액션을 감지하여 상태 업데이트 로직 작성
  const handleToggleState = (selectedID: string) => {
    // 무엇을 전달받을 것인가?
    // 어떻게 개별 항목을 식별할 것인가

    const nextState = state.map((item: { id: string; children: string; active: boolean }) => {
      // 조건 처리
      // 사용자가 누른 스위치의 id와 일치하는 item인 경우 => item.active 반전
      if (selectedID === item.id) {
        return {
          ...item,
          active: !item.active,
        };
      }

      // 그렇지 않은 경우 => 그대로 item반환
      return item;
    });
    // 다음 렌더링 시 사용될 상태 값 제공
    // 새로운 다음 상태 = 기존 상태 배열을 토대로 새로운 다음 상태 배열을 만든다

    // 리액트에게 렌더링 요청
    setState(nextState);
  };

  // 상태(State) 데이터 순환 마크업 생성
  return (
    <ul className="SwitchList" style={switchStyles}>
      {state.map(({ id, active, children }) => (
        <li key={id}>
          <Switch active={active} onToggle={() => handleToggleState(id)}>
            {children}
          </Switch>
        </li>
      ))}
    </ul>
  );

  //  속성(props) 데이터 순환 마크업 생성
  // return (
  //   <ul className="SwitchList" style={switchStyles}>
  //     {items.map((item) => (
  //       <li key={item.id}>
  //         <Switch
  //           active={item.active}
  //           disabled={item.disabled}
  //           showOnOffText={item.showOnOffText}
  //           onToggle={item.onToggle}
  //         >
  //           {item.children}
  //         </Switch>
  //       </li>
  //     ))}
  //   </ul>
  // );
}

export default SwitchList;
