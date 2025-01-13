// --------------------------------------------------------------------------
// ✅ Switch 컴포넌트 작성(실습)
// --------------------------------------------------------------------------
// - [x] switch 역할(role) 설정
// - [x] aria-checked 속성을 사용해 ON/OFF 상태 설정
// - [ ] ON/OFF 텍스트를 화면에 표시하더라도 aria-hidden 속성을 사용해 읽지 않도록 설정
// - [ ] 사용자가 Space, Enter(옵션) 키를 눌렀을 때 작동되도록 설정
// - [ ] 비활성 상태인 경우, aria-disabled 속성을 사용해 설정
// --------------------------------------------------------------------------
import React from "../lib/react.js";
interface SwitchProps {
  showOnOffText?: boolean;
  children: React.ReactNode; // switch label
  active?: boolean; // 기본 값 false
  disabled?: boolean; // 기본 값 false
}

const h = React.createElement;

function Switch({
  active = false,
  disabled = false,
  showOnOffText = false,
  children,
}: SwitchProps) {
  // 조건부 렌더링 -> 조건에 따라 참인 경우와 거짓인 경우에 따라 달라짐
  // 1. if문을 사용한 조건부 렌더링
  let switchText: "ON" | "OFF" | null = "OFF";

  if (active) {
    switchText = "ON";
  }

  if (!showOnOffText) {
    switchText = null;
  }

  const switchTextNode =
    switchText && h("span", { className: "switch--text", "aria-hidden": true }, switchText);

  return h("div", {
    role: "switch",
    "aria-checked": active,
    "aria-disabled": disabled,
    className: "switch",
    tabIndex: 0,
    children: [
      h("span", { className: "switch--label" }, children),
      h("span", { className: "switch--handle" }),
      switchTextNode,
    ],
  });
}

export default Switch;
