import React, { useReducer } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const reducer = (state, action) => {
    if (action.type === "add") {
      return state + 1;
    } else if (action.type === "minus") {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}> count + </button>
      <button onClick={() => dispatch({ type: "minus" })}> count - </button>
      {state}
    </div>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));