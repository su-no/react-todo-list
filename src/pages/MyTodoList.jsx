import React from 'react';
import AddForm from '../components/AddForm/AddForm';
import TodoList from '../components/TodoList/TodoList';
import { FlexContainer } from '../components/styles/FlexContainer';

export default function MyTodoList() {
  return (
    <>
      <AddForm />
      {/* active/done 투두리스트 */}
      <FlexContainer className='todo-lists'>
        <TodoList name='active' />
        <TodoList name='done' />
      </FlexContainer>
    </>
  );
}
