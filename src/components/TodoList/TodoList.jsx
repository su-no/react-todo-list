import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Todo from '../Todo/Todo';

export default function TodoList({ name }) {
  const isActiveList = name === 'active' ? true : false;
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
          <Todo todo={t.todo} isDone={t.isDone} key={t.id} id={t.id} />
        ))}
    </div>
  );
}
