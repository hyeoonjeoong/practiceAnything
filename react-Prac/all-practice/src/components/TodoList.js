import React, { useState } from 'react';
import styled from 'styled-components';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchText, setSearchText] = useState('');

  const addTodo = () => {
    const newTodo = { text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput('');
    console.log('newTodo', newTodo);
    console.log('todos', todos);
  };

  const toggleComplete = (index) => {
    console.log(index);
    const checkTodos = [...todos];
    checkTodos[index].completed = !checkTodos[index].completed;
    setTodos(checkTodos);
  };

  const filterTodos = () => {
    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed);
    }
    if (filter === 'incomplete') {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  };

  const searchTodos = () => {
    return filterTodos().filter((todo) => todo.text.includes(searchText));
  };
  return (
    <>
      <Input
        type="text"
        placeholder="할 일을 입력해주세요 :)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={addTodo}>작성하기</Button>
      <br />
      <Button onClick={() => setFilter('all')}>전체 보기</Button>
      <Button onClick={() => setFilter('completed')}>할 일 완료!</Button>
      <Button onClick={() => setFilter('incomplete')}>할 일 진행 중!</Button>
      <br />
      <Input
        type="text"
        placeholder="검색 내용을 입력해주세요"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul>
        {searchTodos().map((todo, index) => (
          <li key={index}>
            {todo.text}{' '}
            <Button onClick={() => toggleComplete(index)}>
              {todo.completed ? '완료 👍🏻' : '진행 중 🥹'}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

const Button = styled.button`
  background: none;
  border: 1px solid #c7b7a3;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 3px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c7b7a3;
  }
`;

const Input = styled.input`
  margin: 5px 1px;
  padding: 5px;
`;
