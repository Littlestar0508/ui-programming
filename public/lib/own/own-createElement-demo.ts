/* -------------------------------------------------------------------------- */
/*                         Own CreateElement Function                         */
/* -------------------------------------------------------------------------- */

function createElements(type, props = {}, ...children) {
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

const ownElement = createElements("div", { id: "own" }, "hello");
const reactAppElement = createElements("div", { id: "react", className: "app" });

console.group("Own 요소 노드");
console.log(ownElement);
console.log(reactAppElement);
console.groupEnd();

export default createElements;
