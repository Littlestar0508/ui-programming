/* -------------------------------------------------------------------------- */
/*                         Own CreateElement Function                         */
/* -------------------------------------------------------------------------- */

function createElement(type, props = {}, ...children) {
  return {
    $$typeof: Symbol("own.element"),
    key: null,
    type,
    props: {
      ...props,
      children,
    },
  };
}

const ownElement = createElement("div", { id: "own" }, "hello");
const reactAppElement = createElement("div", { id: "react", className: "app" });

console.group("Own 요소 노드");
console.log(ownElement);
console.log(reactAppElement);
console.groupEnd();

export default createElement;
