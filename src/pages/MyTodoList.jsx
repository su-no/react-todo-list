import React from 'react';
import AddForm from '../components/AddForm/AddForm';
import TodoList from '../components/TodoList/TodoList';
import styled from 'styled-components';

export default function MyTodoList() {
  return (
    <>
      <AddForm />
      {/* active/done 투두리스트 */}
      <Container className='todo-lists'>
        <TodoList name='active' />
        <TodoList name='done' />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
