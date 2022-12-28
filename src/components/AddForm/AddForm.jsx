import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../App';
import Button from '../common/Button/Button';
import * as styled from './AddForm.style';
import axios from 'axios';
import { SERVER_URL } from '../../common/axios/constant';

export default function AddForm() {
  const [todoValue, setTodoValue] = useState('');
  const [visible, setVisible] = useState(false);

  const mutationAdd = useMutation({
    mutationFn: async (newTodo) => {
      await axios.post(`${SERVER_URL}/todos`, newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

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
      setVisible(true); // 경고문구 표시
      return;
    }

    // DB에 todo 추가
    mutationAdd.mutate({ isDone: false, todo });
    setVisible(false); // 경고문구 숨김
    setTodoValue('');
  };

  return (
    <styled.TodoFormContainer>
      <styled.TodoForm onSubmit={handleSubmit}>
        <styled.TodoLabel htmlFor='new-todo'>To Do </styled.TodoLabel>
        <styled.TodoInput
          type='text'
          id='new-todo'
          name='new-todo'
          onChange={handleChange}
          autoFocus={true}
          value={todoValue}
        />
        <styled.TodoInputErrorMessage visible={visible}>
          내용을 입력하세요.
        </styled.TodoInputErrorMessage>
        <Button value='추가' />
      </styled.TodoForm>
    </styled.TodoFormContainer>
  );
}
