import React, { useState } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";
import "./index.css";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key == "Enter") {
      setData([...data, text]);
    }
  };

  const handleDelete = (idx) => {
    let filtered = data.filter((item, index) => index != idx);
    setData(filtered);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} onKeyDown={handleSubmit} />
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            {item} <button onClick={() => handleDelete(idx)}> delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

render(<App />, document.getElementById("root"));
