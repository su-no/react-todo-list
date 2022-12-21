import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';
import * as styled from './TodoDetail.style';
import Button from '../common/Button/Button';

export default function TodoDetail() {
  const { todoId } = useParams();
  const todos = useSelector((state) => state.todos);
  const { id, isDone, todo } = todos.filter((t) => t.id === todoId)[0];
  const navigate = useNavigate();

  return (
    <styled.TodoDetailContainer>
      <Button value='뒤로' handleClick={() => navigate(-1)} />
      <styled.Title>{todo}</styled.Title>
      <ul className='ul'>
        <li className='li'>
          <span className='li-name'>ID</span>
          {id}
        </li>
        <li className='li'>
          <span className='li-name'>State</span>
          {isDone ? 'Completed ✅' : 'Active 🔥'}
        </li>
      </ul>
    </styled.TodoDetailContainer>
  );
}
