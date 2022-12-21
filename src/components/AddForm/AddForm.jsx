import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/modules/todos';
import Button from '../common/Button/Button';
import * as styled from './AddForm.style';

export default function AddForm() {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();

  // input 값이 바뀔 때 todoValue 값을 업데이트
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  // form이 submit되면 실행되는 함수. todo를 추가함
  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = todoValue.trim(); // todo 앞뒤 공백을 제거
    if (!todo) {
      // todo 입력값이 없으면 초기화 후 리턴
      setTodoValue('');
      return;
    }
    // todo 추가
    dispatch(addTodo(todo));
    setTodoValue('');
  };

  return (
    <styled.FormContainer>
      <styled.Form onSubmit={handleSubmit}>
        <styled.Label htmlFor='new-todo'>To Do </styled.Label>
        <styled.Input
          type='text'
          id='new-todo'
          name='new-todo'
          onChange={handleChange}
          autoFocus={true}
          value={todoValue}
        />
        <Button value='추가' />
      </styled.Form>
    </styled.FormContainer>
  );
}
