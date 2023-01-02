import React from 'react';
import * as styled from './TodoList.style';
import Todo from '../Todo/Todo';
import { useTodoQuery } from '../../hooks/useTodoQuery';

export default function TodoList({ name }) {
  const isActiveList = name === 'active' ? true : false;

  const { isLoading, todos } = useTodoQuery();

  return (
    <styled.Container>
      {/* active/done 리스트에 따라 타이틀 표시 */}
      <styled.Title>{isActiveList ? 'Active 🔥' : 'Done ✅'}</styled.Title>
      {isLoading
        ? 'Loading...'
        : todos
            .filter((t) => isActiveList === !t.isDone)
            .map((t) => (
              <Todo todo={t.todo} isDone={t.isDone} key={t.id} id={t.id} />
            ))}
    </styled.Container>
  );
}
