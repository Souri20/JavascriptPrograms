import React, { useState } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";
import "./index.css";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [state, setState] = useState(false);
  return (
    <div>
      <button
        style={{ backgroundColor: state ? "red" : "yellow" }}
        onClick={() => setState(!state)}
      >
        Toggle
      </button>
    </div>
  );
};

render(<App />, document.getElementById("root"));