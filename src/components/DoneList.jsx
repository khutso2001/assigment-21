import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";

import "./DoneList.css";
const DoneList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const doneTodos = todos.filter((todo) => todo.done);

  return (
    <div className="doneList">
      <h2>Completed Tasks</h2>
      <ul>
        {doneTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            <button
              className="delete-button"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoneList;
