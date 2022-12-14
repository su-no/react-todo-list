import React from 'react';
import { useTodoQuery } from '../../hooks';
import * as styled from './TodoList.style';
import Todo from '../Todo/Todo';

export default function TodoList({ name }) {
  const { isLoading, activeTodos, doneTodos } = useTodoQuery();

  const title = name === 'active' ? 'Active π₯' : 'Done β';
  const todos = name === 'active' ? activeTodos : doneTodos;

  return (
    <styled.Container>
      {/* active/done λ¦¬μ€νΈμ λ°λΌ νμ΄ν νμ */}
      <styled.Title>{title}</styled.Title>
      {isLoading
        ? 'Loading...'
        : todos.map(({ todo, isDone, id }) => (
            <Todo todo={todo} isDone={isDone} key={id} id={id} />
          ))}
    </styled.Container>
  );
}
