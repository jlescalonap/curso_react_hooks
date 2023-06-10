/* eslint-disable @typescript-eslint/ban-ts-comment */
import "./index.css";
import ReactDOM from "react-dom/client";
import { TodoApp } from "./08-useReducer/TodoApp";

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <TodoApp />
  // </React.StrictMode>
);
