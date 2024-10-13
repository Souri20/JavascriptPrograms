import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";
import "./index.css";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Orange", "Pineapple", "Grape"];

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredItems.map((item, idx) => (
        <p key={idx}>{item} </p>
      ))}
    </div>
  );
};

render(<App />, document.getElementById("root"));