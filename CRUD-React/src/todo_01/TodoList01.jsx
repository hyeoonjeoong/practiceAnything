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
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleOnKeyPress}
      />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} onDelete={handleDeleteItem} />
    </>
  );
};

export default TodoList01;
