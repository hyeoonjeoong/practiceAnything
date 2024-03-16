import styled from "styled-components";

import "./todo_01/styles/todo.css";
import TodoList01 from "./todo_01/TodoList01";

import GuestBook01 from "./guestBook_01/GuestBook01";

function App() {
  return (
    <>
      <Title>Todo List 01</Title>
      <TodoList01 />
      {/* ------------------------------------- */}
      <Title>Guest Book 01</Title>
      <GuestBook01 />
      {/* ------------------------------------- */}
    </>
  );
}

export default App;

const Title = styled.div`
  text-align: center;
  background-color: beige;
  margin: 20px 5px;
`;
