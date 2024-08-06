import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import "./AddTodo.css";
const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        done: false,
      };
      dispatch(addTodo(newTodo));
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="addInput"
      />
      <button onClick={handleSubmit} className="addButton">
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
