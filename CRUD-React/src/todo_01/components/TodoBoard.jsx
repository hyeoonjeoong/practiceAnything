import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (props) => {
  return (
    <>
      {props.todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      ))}
    </>
  );
};

export default TodoBoard;
