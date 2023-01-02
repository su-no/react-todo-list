import React from 'react';
import { useTodoQuery } from '../../hooks';
import * as styled from './TodoList.style';
import Todo from '../Todo/Todo';

export default function TodoList({ name }) {
  const { isLoading, activeTodos, doneTodos } = useTodoQuery();

  const title = name === 'active' ? 'Active 🔥' : 'Done ✅';
  const todos = name === 'active' ? activeTodos : doneTodos;

  return (
    <styled.Container>
      {/* active/done 리스트에 따라 타이틀 표시 */}
      <styled.Title>{title}</styled.Title>
      {isLoading
        ? 'Loading...'
        : todos.map(({ todo, isDone, id }) => (
            <Todo todo={todo} isDone={isDone} key={id} id={id} />
          ))}
    </styled.Container>
  );
}
