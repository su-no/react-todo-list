import { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
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
