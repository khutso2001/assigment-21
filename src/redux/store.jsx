import { createStore } from "redux";
import { combineReducers } from "redux";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;
