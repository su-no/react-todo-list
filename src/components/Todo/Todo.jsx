import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { queryClient } from '../../App';
import { SERVER_URL } from '../../common/axios/constant';
import * as styled from './Todo.style';
import Button from '../common/Button/Button';

export default function Todo({ todo, isDone, id }) {
  const navigate = useNavigate();

  const mutationDelete = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${SERVER_URL}/todos/${id}`);
    },
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });

  const mutationToggle = useMutation({
    mutationFn: async (isDone) => {
      await axios.patch(`${SERVER_URL}/todos/${id}`, {
        isDone: !isDone,
      });
    },
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });

  // todo 제거하는 함수
  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      mutationDelete.mutate(id);
    }
  };

  // todo 상태를 업데이트 하는 함수
  const handleToggle = () => {
    mutationToggle.mutate(isDone);
  };

  return (
    <styled.TodoContainer id={id} key={id}>
      {/* todo를 클릭하면 상세페이지로 이동 */}
      <styled.TodoItem onClick={() => navigate(`/${id}`)}>
        {todo}
      </styled.TodoItem>
      <styled.Buttons>
        <Button handleClick={handleDelete} value='삭제' />
        {/* 완료된 todo는 취소버튼 표시, 완료되지 않은 todo는 완료버튼 표시 */}
        <Button handleClick={handleToggle} value={isDone ? '취소' : '완료'} />
      </styled.Buttons>
    </styled.TodoContainer>
  );
}
