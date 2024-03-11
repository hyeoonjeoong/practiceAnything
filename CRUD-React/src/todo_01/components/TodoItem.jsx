import React, { useState } from "react";

const TodoItem = (props) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editList, setEditList] = useState(props.item.text);

  const handleDel = () => {
    props.onDelete(props.item.id);
  };

  const handleEdit = (e) => {
    //console.log("edit btn click", props.item.id);
    //console.log("edit btn click", props.item.text);
    setOnEdit(true);
    setEditList(props.item.text);
    console.log("수정 전", editList);
  };

  const handleChange = (e) => {
    setEditList(e.target.value);
    console.log("수정 후 ", editList);
  };

  const handleEditCancel = () => {
    console.log("수정취소");
    setOnEdit(false);
  };

  const handleEditSave = () => {
    console.log("수정 저장");
  };
  return (
    <>
      <div className="todo-item todo-text">
        {props.item.text}
        {onEdit && (
          <input type="text" value={editList} onChange={handleChange} />
        )}
        {onEdit ? (
          <button onClick={handleEditSave} className="todo-btn">
            저장
          </button>
        ) : (
          <button onClick={handleEdit} className="todo-btn">
            수정
          </button>
        )}
        {onEdit ? (
          <button onClick={handleEditCancel} className="todo-btn">
            취소
          </button>
        ) : (
          <button onClick={handleDel} className="todo-btn">
            삭제
          </button>
        )}
      </div>
    </>
  );
};

export default TodoItem;
