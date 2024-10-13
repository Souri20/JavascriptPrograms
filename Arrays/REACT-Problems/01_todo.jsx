import React, { useState } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [text, setText] = useState("");
  const [obj, setObj] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let newObj = { newText: text, checked: false };
    setObj((prev) => [...prev, newObj]);
    setAllItems((prev) => [...prev, newObj]);
    setText("");
  };

  const handleDataChnage = (index) => {
    const fillteredItems = obj.map((item, idx) =>
      index === idx ? { ...item, checked: !item.checked } : item
    );

    setObj(fillteredItems);
    setAllItems(fillteredItems);
  };

  const checkButton = (e) => {
    const filtered = obj.filter((item) => item.checked == true);
    setAllItems(filtered);
  };

  const UnCheckButton = () => {
    const filteredUncheck = obj.filter((item) => item.checked == false);
    setAllItems(filteredUncheck);
  };
  const Clear = () => {
    setAllItems([]);
  };

  return (
    <div>
      <input type="text" name="input" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add me</button>
      <ul>
        {allItems.map((item, idx) => (
          <li key={idx}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleDataChnage(idx)}
            />
            {item.newText}
          </li>
        ))}
      </ul>
      <button onClick={checkButton}>chekced</button>
      <button onClick={UnCheckButton}>Unchekced</button>
      <button onClick={Clear}>Clear</button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
