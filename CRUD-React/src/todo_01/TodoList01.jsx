import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

const TodoList01 = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log("input value: ", inputValue);
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
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
      <TodoBoard todoList={todoList} />
    </>
  );
};

export default TodoList01;
