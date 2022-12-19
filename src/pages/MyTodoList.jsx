import React from 'react';
import AddForm from '../components/AddForm/AddForm';
import TodoList from '../components/TodoList/TodoList';

export default function MyTodoList() {
  return (
    <>
      <AddForm />
      {/* active/done 투두리스트 */}
      <div className='todo-lists'>
        <TodoList name='active' />
        <TodoList name='done' />
      </div>
    </>
  );
}
