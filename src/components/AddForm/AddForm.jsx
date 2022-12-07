import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style.css';

export default function AddForm({ setTodos }) {
  const [todoValue, setTodoValue] = useState('');

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    // todo 앞뒤 공백을 제거
    const todo = todoValue.trim();
    // todo 입력값이 없으면 리턴
    if (!todo) {
      setTodoValue('');
      return;
    }
    setTodos((prev) => [...prev, { todo, isDone: false, id: uuid() }]);
    setTodoValue('');
  };
  return (
    <div className='addform__container'>
      <form className='addform' onSubmit={addTodo}>
        <label className='addform__label' htmlFor='new-todo'>
          To Do{' '}
        </label>
        <input
          className='addform__input'
          type='text'
          id='new-todo'
          name='new-todo'
          onChange={handleChange}
          autoFocus={true}
          value={todoValue}
        />
        <input className='btn addform__submit' type='submit' value='추가' />
      </form>
    </div>
  );
}
