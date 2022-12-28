import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Button from '../common/Button/Button';
import * as styled from './TodoDetail.style';
import './style.css';
import { SERVER_URL } from '../../common/axios/constant';

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
          <ul className='ul'>
            <li className='li'>
              <span className='li-name'>ID</span>
              {todoDetail.id}
            </li>
            <li className='li'>
              <span className='li-name'>State</span>
              {todoDetail.isDone ? 'Completed ✅' : 'Active 🔥'}
            </li>
          </ul>
        </>
      )}
    </styled.TodoDetailContainer>
  );
}
