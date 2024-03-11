import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (props) => {
  return (
    <>
      <h1>🐼 Todo List</h1>
      {props.todoList.map((item) => (
        <TodoItem key={item.id} item={item} onDelete={props.onDelete} />
      ))}
    </>
  );
};

export default TodoBoard;
