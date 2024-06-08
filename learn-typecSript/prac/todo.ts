// //--원래
// //let todoItems:object[];
// //--변경
// let todoItems:{id:number, title:string, done:boolean}[]

// // api
// function fetchTodoItems():{id:number, title:string, done:boolean}[] {
//   const todos = [
//     { id: 1, title: '안녕', done: false },
//     { id: 2, title: '타입', done: false },
//     { id: 3, title: '스크립트', done: false },
//   ];
//   return todos;
// }

// // crud methods
// function fetchTodos():object[] {
//   const todos = fetchTodoItems();
//   return todos;
// }

// //--원래
// // function addTodo(todo:object):void {
// //   todoItems.push(todo);
// // }
// //-- 변경
// function addTodo(todo:{id:number, title:string, done:boolean}):void {
//   todoItems.push(todo);
// }

// function deleteTodo(index:number):void {
//   todoItems.splice(index, 1);
// }

// function completeTodo(index:number, todo:{id:number, title:string, done:boolean}):void {
//   todo.done = true;
//   todoItems.splice(index, 1, todo);
// }

// // business logic
// function logFirstTodo():object {
//   return todoItems[0];
// }

// function showCompleted():object[] {
//   return todoItems.filter(item => item.done);
// }

// function addTwoTodoItems():void {
//   // addTodo() 함수 두 번 호출, 할 일이 2개 추가되게
//   //-이러케
//   const item1 = {
//     id:4,
//     title:'할일 4',
//     done:false
//   }
//   addTodo(item1)
//   //--이러케도 가능
//   addTodo(
//     {
//         id:5,
//         title:'할일 5',
//         done:false
//       }
//   )
// }

// // NOTE: 유틸 함수
// function log():void {
//   console.log(todoItems);
// }

// todoItems = fetchTodoItems();
// addTwoTodoItems();
// log();

//--------------------------------------------------------------------------
//위에서는 기본적으로 타입을 넣어주었다.
//반복되는 거 있으니 간결하게 하려면??
//--------------------------------------------------------------------------
// type Todo = {
//     id:string,
//     title:string,
//     done:boolean
// }
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

//--원래
// function addTodo(todo:object):void {
//   todoItems.push(todo);
// }
//-- 변경
function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter((item) => item.done);
}

function addTwoTodoItems(): void {
  // addTodo() 함수 두 번 호출, 할 일이 2개 추가되게
  //-이러케
  const item1 = {
    id: 4,
    title: "할일 4",
    done: false,
  };
  addTodo(item1);
  //--이러케도 가능
  addTodo({
    id: 5,
    title: "할일 5",
    done: false,
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
