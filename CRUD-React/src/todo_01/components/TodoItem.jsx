import React, { useState, useRef, useEffect } from "react";

const TodoItem = (props) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editList, setEditList] = useState(props.item.text);
  const inputFocus = useRef();

  useEffect(() => {
    if (onEdit) {
      inputFocus.current.focus();
    }
  }, [onEdit]);

  const handleDel = () => {
    props.onDelete(props.item.id);
  };

  const handleChange = (e) => {
    setEditList(e.target.value);
  };

  const handleEdit = (e) => {
    setOnEdit(true);
    setEditList(props.item.text);
  };

  const handleEditCancel = () => {
    setOnEdit(false);
  };

  const handleEditSave = () => {
    props.onEdit(props.item.id, editList);
    setOnEdit(false);
  };

  return (
    <>
      <div className="todo-item-layout">
        <div className="todo-item todo-text">
          {onEdit ? (
            <input
              type="text"
              value={editList}
              onChange={handleChange}
              className="todo-inputEdit"
              ref={inputFocus}
            />
          ) : (
            <>{props.item.text}</>
          )}
        </div>
        <div>
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
      </div>
    </>
  );
};

export default TodoItem;
