import React from "react";

const TodoItem = (props) => {
  return (
    <>
      <div className="todo-item">{props.item}</div>
    </>
  );
};

export default TodoItem;
