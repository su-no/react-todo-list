import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import * as styled from './TodoList.style';

export default function TodoList({ name }) {
  const isActiveList = name === 'active' ? true : false;
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <styled.Container>
      {/* active/done 리스트에 따라 타이틀 표시 */}
      <styled.Title>{isActiveList ? 'Active 🔥' : 'Done ✅'}</styled.Title>
      {todos
        // active일 때는 isDone이 false인 값만 표시
        // done일 때는 inDone이 true인 값만 표시
        .filter((t) => isActiveList === !t.isDone)
        .map((t) => (
          <Todo todo={t.todo} isDone={t.isDone} key={t.id} id={t.id} />
        ))}
    </styled.Container>
  );
}
