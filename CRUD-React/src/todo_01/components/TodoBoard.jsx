import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (props) => {
  return (
    <>
      <h1>🐼 Todo List</h1>
      {props.todoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </>
  );
};

export default TodoBoard;
