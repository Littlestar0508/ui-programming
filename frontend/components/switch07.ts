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

const h = React.createElement;

interface SwitchProps {
  active?: boolean;
  disabled?: boolean;
  showOnOffText?: boolean;
  children: React.ReactNode;
  onToggle?: () => void;
}

function Switch({
  active = false,
  disabled = false,
  showOnOffText = false,
  onToggle,
  children,
}: SwitchProps) {
  let switchText: "ON" | "OFF" | null = !showOnOffText ? null : active ? "ON" : "OFF";

  let switchTextNode = null;

  if (switchText) {
    switchTextNode = h("span", { className: "Switch--text", "aria-hidden": true }, switchText);
  }

  const handleClick = () => {
    onToggle?.();
  };

  return h(
    "div",
    {
      role: "switch",
      "aria-checked": active,
      "aria-disabled": disabled,
      tabIndex: 0,
      className: "Switch",
      // 이벤트 핸들러를 onClick 속성에 연결
      // 활성상태 또는 비활성 상태에 따라 함수(기능) 작동 여부 조건 처리
      onClick: handleClick,
    },
    h("span", { className: "Switch--label" }, children),
    h(
      "span",
      { className: "Switch-info" },
      h("span", { className: "Switch--knob" }),
      switchTextNode
    )
  );
}

export default Switch;
