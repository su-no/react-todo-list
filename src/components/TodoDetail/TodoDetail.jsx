import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { SERVER_URL } from '../../common/axios/constant';
import * as styled from './TodoDetail.style';
import Button from '../common/Button/Button';

export default function TodoDetail() {
  const { todoId } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: todoDetail } = useQuery({
    queryKey: ['todo'],
    queryFn: async () => {
      const { data } = await axios.get(`${SERVER_URL}/todos/${todoId}`);
      return data;
    },
  });

  return (
    <styled.TodoDetailContainer>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <Button value='뒤로' handleClick={() => navigate(-1)} />
          <styled.Title>{todoDetail.todo}</styled.Title>
          <styled.Ul>
            <styled.Li className='li'>
              <styled.BordName className='li-name'>ID</styled.BordName>
              {todoDetail.id}
            </styled.Li>
            <styled.Li className='li'>
              <styled.BordName className='li-name'>State</styled.BordName>
              {todoDetail.isDone ? 'Completed ✅' : 'Active 🔥'}
            </styled.Li>
          </styled.Ul>
        </>
      )}
    </styled.TodoDetailContainer>
  );
}
