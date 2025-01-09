/* ------------------ Vanilla(Pure) JavaScript Programming ------------------ */

import { Greeting } from "./greeting";

// JavaScript Markup and Event Binding & Mound DOM Element Node

// 인사말 리스트(목록) 배열
const greetingList = Object.values(Greeting); // values
const greetingKeyLst = Object.keys(Greeting); // keys
const greetingEntryList = Object.entries(Greeting); // [[key,value] , ...]

// 제어 대상 참조X -> 생성
// const heading = document.querySelector("h1");
const heading = document.createElement("h1");
heading.textContent = greetingList.at(0) as string;

// 제어 버튼 참조X -> 생성
// const changeButton = document.querySelector('[type="button"]');
const changeButton = document.createElement("button");
changeButton.setAttribute("type", "button");
changeButton.textContent = "인사말";

// 버튼에 이벤트 바인딩
changeButton?.addEventListener("click", handleChangeGreetMessage);

// 이벤트 핸들러
function handleChangeGreetMessage() {
  // 랜덤 인사말 설정
  const message = greetingList[Math.floor(Math.random() * greetingList.length)];
  // 화면에 렌더링
  heading && (heading.textContent = message);
}

// 마운트(Mount)할 DOM 엘리먼트 노드를 참조
const app = document.getElementById("vanilla");

// 동적으로 생성된 엘리먼트 노드를 참조한 DOM 노드에 마운트
app?.prepend(heading, changeButton);
