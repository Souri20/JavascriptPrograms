import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

// Functional component
const useCount = (count) => {
  const [counts, setCounts] = useState(0);

  useEffect(() => {}, [counts]);

  const increment = () => {
    setCounts((prev) => prev + 1);
  };

  const decrement = () => {
    setCounts((prev) => prev - 1);
  };

  return { counts, increment, decrement };
};

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const { counts, increment, decrement } = useCount(0);
  return (
    <div>
      <button onClick={() => increment()}>add me</button>
      <button onClick={() => decrement()}>minus me</button>
      {counts}
    </div>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));