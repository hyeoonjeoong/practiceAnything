import "./todo_01/styles/todo.css";

import TodoList01 from "./todo_01/TodoList01";
import styled from "styled-components";

function App() {
  return (
    <>
      <Title>Todo List 01</Title>
      <TodoList01 />
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
