import React from 'react';
import Todo from './Todo';

export default function TodoList({ listName, todos, setTodos }) {
  return (
    <div className='todo-list'>
      <h2 className='todo-list__title'>{listName}</h2>
      {todos
        .filter((t) => t.isDone === (listName === 'active' ? false : true))
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
