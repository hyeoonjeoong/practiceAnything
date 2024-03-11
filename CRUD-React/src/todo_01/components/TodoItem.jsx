import React from "react";

const TodoItem = (props) => {
  const handleDel = () => {
    console.log("click", props);
    props.onDelete(props.item.id);
  };
  return (
    <>
      <div className="todo-item todo-text">
        {props.item.text}
        <button onClick={handleDel} className="todo-btn">
          삭제
        </button>
      </div>
    </>
  );
};

export default TodoItem;
