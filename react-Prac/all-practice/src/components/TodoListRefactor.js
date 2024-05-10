import React, { useState } from 'react';
import styled from 'styled-components';

//사용되는 filter 타입을 밖으로 빼서 사용하면
//--> 나중에 타입이 바뀌거나 추가가 필요할 때 더 편리하다.
//코드가 사용된 곳 일일이 뒤져서 바꿀 필요 없이, 명시해 준 타입만 변경해주면 되는 것.
const filterType = {
  ALL: 'all',
  COMPLETED: 'completed',
  INCOMPLETE: 'incomplete',
};

const TodoListRefactor = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState(filterType.ALL);
  const [searchText, setSearchText] = useState('');

  const addTodo = () => {
    const newTodos = TodosController(todos)
      .add({ text: input, completed: false, id: Math.random() })
      .get();

    setTodos(newTodos);
    setInput('');
  };

  const toggleComplete = (targetTodo) => {
    const checkTodos = TodosController(todos).toggleComplete(targetTodo).get();

    setTodos(checkTodos);
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
        {TodosController(todos)
          .filter(filter)
          .search(searchText)
          .get()
          .map((todo) => (
            <li key={todo.id}>
              {todo.text}{' '}
              <Button onClick={() => toggleComplete(todo)}>
                {todo.completed ? '완료 👍🏻' : '진행 중 🥹'}
              </Button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TodoListRefactor;

// TodosController에 초기 todos 목록 전달
const TodosController = (todos) => ({
  add: (todo) => {
    return TodosController([...todos, todo]);
  },
  toggleComplete: (targetTodo) => {
    const checkTodos = todos.map((todo) => {
      if (todo.id === targetTodo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    return TodosController(checkTodos);
  },
  search: (searchText) => {
    const searchTodos = todos.filter((todo) => todo.text.includes(searchText));
    return TodosController(searchTodos);
  },
  filter: (filter) => {
    let filteredTodos = todos;
    if (filter === filterType.COMPLETED) {
      filteredTodos = todos.filter((todo) => todo.completed);
    } else if (filter === filterType.INCOMPLETE) {
      filteredTodos = todos.filter((todo) => !todo.completed);
    }
    return TodosController(filteredTodos);
  },
  get: () => todos, //최종적으로 작업 한 todos 반환.
});
//--> 각 실행되고 반환 되는 값들이 get을 통해 나오게 된다.
//컨트롤러로 묶어버리고 각 메소드가 반환되면서 사용 되는 것.
//사용 할 때 . 점 접근법으로 접근 가능하게 된다.
//메서드 체이닝을 통해 연결하여 연속적으로 적용할 수 있다.
//좀 더 명시적이다.

//👀 내가 지금까지 작성한 코드는 별 게 아니었다.
//이렇게 작성해야하는구나를 느꼈다.
//근데 같은 코드인데도 이렇게 분리하니 확실히 편해보이긴 하지만
//아직 잘 모르겠다. 이렇게 나누기가 어려운거였나 싶다. 활용이 부족한거겠지만
//몇 번 더 쳐보면서 손으로도 익히고, 흐름도 잡아봐야 겠다.

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
