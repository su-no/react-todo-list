import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { SERVER_URL } from '../common/axios/constant';
import { queryClient } from '../App';

export const useInput = () => {
  const [todoValue, setTodoValue] = useState('');
  const [visible, setVisible] = useState(false);

  // input 값이 바뀔 때 todoValue 값을 업데이트
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const mutationAdd = useMutation({
    mutationFn: async (newTodo) => {
      await axios.post(`${SERVER_URL}/todos`, newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

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

  return { visible, todoValue, handleChange, handleSubmit };
};
