import React from 'react';
import Todo from '../Todo/Todo';
import './style.css';

export default function TodoList({ isActive, todos, setTodos }) {
  return (
    <div className='todo-list'>
      <h2 className='todo-list__title'>{isActive ? 'Active 🔥' : 'Done ✅'}</h2>
      {todos
        .filter((t) => t.isDone === !isActive)
        .map((t) => (
          <Todo
            todo={t.todo}
            isDone={t.isDone}
            setTodos={setTodos}
            key={t.id}
            id={t.id}
          />
        ))}
    </div>
  );
}
