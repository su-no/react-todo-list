import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
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
  ]);
  const [ACTIVE, DONE] = ['Active 🔥', 'Done ✅'];

  return (
    <div className='container'>
      <h1 className='title'>Hyojin's To Do List</h1>
      <AddForm todos={todos} setTodos={setTodos} />
      <div className='todo-lists'>
        <TodoList list={ACTIVE} todos={todos} setTodos={setTodos} />
        <TodoList list={DONE} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
