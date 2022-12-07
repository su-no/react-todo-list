import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import AddForm from './components/AddForm/AddForm';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className='container'>
      <Header>Hyojin's To Do List</Header>
      <AddForm setTodos={setTodos} />
      <div className='todo-lists'>
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

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
