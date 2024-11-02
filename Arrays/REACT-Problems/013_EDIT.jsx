import React, { useState } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

// Functional component

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [text, setText] = useState("");
  const [allData, setData] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const [editObj, setEditObj] = useState({});

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    const obj = { Text: text, time: Date.now() };
    setData([...allData, obj]);
    setText("");
  };
  const handleEdit = (text, time) => {
    const getObj = allData.find((tim) => time == tim.time);
    setEditObj(getObj);
    setText(text);
    setButtonState(!buttonState);
  };

  const handleUpdate = () => {
    const ChangedList = allData.map((item) =>
      item.time == editObj.time
        ? { ...item, Text: text, time: Date.now() }
        : item
    );
    setData(ChangedList);
    setButtonState(!buttonState);
    setText("");
  };

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      {buttonState ? (
        <button onClick={handleUpdate}> Update </button>
      ) : (
        <button onClick={handleAdd}> Add </button>
      )}

      {allData?.map((item) => (
        <p key={item.time}>
          {item.Text}{" "}
          <button onClick={() => handleEdit(item.Text, item.time)}>
            Edit{" "}
          </button>
        </p>
      ))}
    </>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));
