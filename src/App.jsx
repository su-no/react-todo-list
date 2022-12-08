import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import AddForm from './components/AddForm/AddForm';
import TodoList from './components/TodoList/TodoList';

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className='container'>
      {/* 제목 */}
      <Header>Hyojin's To Do List</Header>
      {/* Todo 입력하고 추가하는 form */}
      <AddForm setTodos={setTodos} />
      {/* active/done 투두리스트 */}
      <div className='todo-lists'>
        <TodoList name='active' todos={todos} setTodos={setTodos} />
        <TodoList name='done' todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

// todo 초기값
const initialTodos = [
  {
    id: uuid(),
    isDone: false,
    todo: '리액트 강의 듣기',
  },
  {
    id: uuid(),
    isDone: true,
    todo: '투두 리스트 만들기',
  },
  {
    id: uuid(),
    isDone: true,
    todo: '마라샹궈 먹기',
  },
];
