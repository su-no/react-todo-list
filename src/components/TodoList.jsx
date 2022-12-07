import React from 'react';
import Todo from './Todo';

export default function TodoList({ list, todos, setTodos }) {
  const ACTIVE = 'Active 🔥';

  return (
    <div className='todo-list'>
      <h2 className='todo-list__title'>{list}</h2>
      {list === ACTIVE
        ? // Active 리스트는 isDone이 false인 리스트
          todos
            .filter((t) => t.isDone === false)
            .map((t) => (
              <Todo
                todo={t.todo}
                isDone={t.isDone}
                setTodos={setTodos}
                key={t.id}
                id={t.id}
              />
            ))
        : // Done 리스트는 isDone이 false인 리스트
          todos
            .filter((t) => t.isDone === true)
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
