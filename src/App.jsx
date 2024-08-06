import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

const App = () => {
  return (
    <div className="App">
      <h1>My Todo App</h1>
      <AddTodo />
      <TodoList />
      <DoneList />
    </div>
  );
};

export default App;
