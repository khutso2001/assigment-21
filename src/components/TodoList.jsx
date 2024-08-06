import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";
import "./ToDoList.css";
const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.text}
          </span>
          <div>
            <button
              className="done-undo-button"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.done ? "Undo" : "Done"}
            </button>
            <button
              className="delete-button"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
