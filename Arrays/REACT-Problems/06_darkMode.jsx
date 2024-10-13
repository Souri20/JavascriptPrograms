import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";
import "./index.css";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className={darkMode ? "container-black" : "container-white"}>
      <button
        className={darkMode ? "dark-button" : "white-button"}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "enable-Normal" : "enable-dark"}
      </button>
    </div>
  );
};

render(<App />, document.getElementById("root"));