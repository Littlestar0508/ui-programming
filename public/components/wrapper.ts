import React from "../lib/react.js";
import ChangeButton from "./change-button";
import Heading from "./heading";

function Wrapper(props: { message: string; lang: string; render: () => void }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading, { greetingMessage: props.message, lang: props.lang }),
    React.createElement(ChangeButton, { render: props.render })
  );
}

export default Wrapper;
