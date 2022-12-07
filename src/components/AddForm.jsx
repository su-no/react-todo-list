import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';

export default function AddForm({ todos, setTodos }) {
  const todoRef = useRef(null);

  const addTodo = (event) => {
    event.preventDefault();
    const todo = todoRef.current.value;
    setTodos((prev) => [...prev, { todo, isDone: false, id: uuid() }]);
    todoRef.current.value = '';
    todoRef.current.focus();
  };
  return (
    <div className='addform__container'>
      <form className='addform' onSubmit={addTodo}>
        <label className='addform__label' htmlFor='new-todo'>
          Todo:{' '}
        </label>
        <input
          className='addform__input'
          type='text'
          id='new-todo'
          name='new-todo'
          ref={todoRef}
        />
        <input className='btn addform__submit' type='submit' value='추가하기' />
      </form>
    </div>
  );
}
