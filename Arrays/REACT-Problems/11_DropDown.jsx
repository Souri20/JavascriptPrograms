import React, { useState, useRef, useEffect } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  let options = {
    car: ["Mercedes", "Audi", "BMW"],
    fruits: ["Mango", "Banana", "Kiwi"],
  };

  const handleChange = (e) => {
    let key = e.target.value;
    let result = options[key];
    setList(result);
  };

  return (
    <>
      <select onChange={handleChange}>
        <option>select option </option>
        <option value="car">Car </option>
        <option value="fruits">Fruits </option>
      </select>

      <select>
        {list?.map((item) => (
          <option value={item}> {item} </option>
        ))}
      </select>
    </>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));