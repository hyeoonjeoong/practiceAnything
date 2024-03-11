import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

const TodoList01 = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const addItem = () => {
    const newItem = {
      id: todoId,
      text: inputValue,
    };
    setTodoList([...todoList, newItem]);
    setInputValue("");
    setTodoId(todoId + 1);
    console.log(todoList);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const handleDeleteItem = (itemId) => {
    const updateList = todoList.filter((item) => item.id !== itemId);
    setTodoList(updateList);
  };
  return (
    <>
      <div className="todo-layout">
        <h2 className="todo-text">🐼 Todo List</h2>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleOnKeyPress}
            className="todo-input"
            placeholder="할 일을 입력해주세요 ! "
          />
          <button onClick={addItem} className="todo-btn">
            추가
          </button>
        </div>
        <TodoBoard todoList={todoList} onDelete={handleDeleteItem} />
      </div>
    </>
  );
};

export default TodoList01;
