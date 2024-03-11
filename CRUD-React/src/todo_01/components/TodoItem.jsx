import React from "react";

const TodoItem = (props) => {
  const handleDel = () => {
    console.log("click", props);
    props.onDelete(props.item.id);
  };
  return (
    <>
      <div className="todo-item">
        {props.item.text}
        <button onClick={handleDel} className="todo-del">
          삭제
        </button>
      </div>
    </>
  );
};

export default TodoItem;
