import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";
import "./index.css";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [form, setForm] = useState({ min: "", normal: "", max: "" });
  const [error, setError] = useState({ error_min: "", error_normal: "" });

  const validate_MINMAX = (MIN, MAX) => {
    if (MIN !== "" && MAX !== "" && MIN > MAX) {
      setError((prev) => ({
        ...prev,
        error_min: "Minimum value should not be greater than max",
      }));
    } else {
      setError((prev) => ({ ...prev, error_min: "" }));
    }
  };

  const validate_MINNormal = (MIN, NORMAL) => {
    if (NORMAL !== "" && MIN !== "" && NORMAL < MIN) {
      setError((prev) => ({
        ...prev,
        error_normal: "Normal Should be greater than MIN",
      }));
    } else {
      setError((prev) => ({ ...prev, error_normal: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    let MIN = name === "min" ? Number(value) : Number(form.min);
    let NORMAL = name === "normal" ? Number(value) : Number(form.normal);
    let MAX = name === "max" ? Number(value) : Number(form.max);

    validate_MINMAX(MIN, MAX);
    validate_MINNormal(MIN, NORMAL);
  };

  console.log(error);

  return (
    <div>
      {/* Show error message if there is an error and max is filled */}
      {error.error_min && form.max && <span>{error.error_min}</span>}
      <br />
      <label> MIN </label>
      <input
        type="number"
        name="min"
        value={form.min}
        onChange={handleChange}
      />
      <br />
      {/* Show error message if there is an error and normal is filled */}
      {error.error_normal && form.normal && <span>{error.error_normal}</span>}
      <br />
      <label> Normal </label>
      <input
        type="number"
        name="normal"
        value={form.normal}
        onChange={handleChange}
      />
      <br />
      <label> Max </label>
      <input
        type="number"
        name="max"
        value={form.max}
        onChange={handleChange}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
