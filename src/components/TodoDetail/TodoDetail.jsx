import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';

export default function TodoDetail() {
  const { todoId } = useParams();
  const todos = useSelector((state) => state.todos);
  const { id, isDone, todo } = todos.filter((t) => t.id === todoId)[0];
  const navigate = useNavigate();

  return (
    <div className='todo-detail__container'>
      <button className='todo-detail__btn' onClick={() => navigate(-1)}>
        이전으로
      </button>
      <div className='detail'>
        <h2 className='todo-title'>{todo}</h2>
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
      </div>
    </div>
  );
}
