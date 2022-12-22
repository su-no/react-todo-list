import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Todo from '../Todo/Todo';
import * as styled from './TodoList.style';
import axios from 'axios';

const fetchTodoList = async () => {
  const { data } = await axios.get('http://localhost:3001/todos');
  return data;
};

export default function TodoList({ name }) {
  const isActiveList = name === 'active' ? true : false;
  const { isLoading, data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  });

  return (
    <styled.Container>
      {/* active/done 리스트에 따라 타이틀 표시 */}
      <styled.Title>{isActiveList ? 'Active 🔥' : 'Done ✅'}</styled.Title>
      {isLoading
        ? 'Loading...'
        : todos
            // active일 때는 isDone이 false인 값만 표시
            // done일 때는 inDone이 true인 값만 표시
            .filter((t) => isActiveList === !t.isDone)
            .map((t) => (
              <Todo todo={t.todo} isDone={t.isDone} key={t.id} id={t.id} />
            ))}
    </styled.Container>
  );
}
