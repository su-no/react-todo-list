import React from 'react';
import Todo from '../Todo/Todo';
import './style.css';

export default function TodoList({ name, todos, setTodos }) {
  const isActiveList = name === 'active' ? true : false;

  return (
    <div className='todo-list'>
      {/* active/done 리스트에 따라 타이틀 표시 */}
      <h2 className='todo-list__title'>
        {isActiveList ? 'Active 🔥' : 'Done ✅'}
      </h2>
      {todos
        // active일 때는 isDone이 false인 값만 표시
        // done일 때는 inDone이 true인 값만 표시
        .filter((t) => isActiveList === !t.isDone)
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
