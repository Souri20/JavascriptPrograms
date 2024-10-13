import React, { useState } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";
import "./index.css";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [error, seterror] = useState({});
  const [data, setData] = useState([]);

  const chekValidation = () => {
    let newErrors = {};

    if (!form.name) {
      newErrors.name = "Name is Required";
    }
    if (!form.email) {
      newErrors.email = "Email is Required";
    }

    seterror(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    chekValidation();
    setData((prev) => [...prev, form]);
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setForm({ ...form, [name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={error.name}
        />
        <label> email </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder={error.email}
          value={form.email}
        />
        <button> Submit </button>
      </form>
    </div>
  );
};

render(<App />, document.getElementById("root"));
