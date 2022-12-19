import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTodo, toggleTodo } from '../../store/modules/todos';
import './style.css';
import Button from '../Button/Button';

export default function Todo({ todo, isDone, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // todo 제거하는 함수
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  // todo 상태를 업데이트 하는 함수
  const handleToggle = () => {
    dispatch(toggleTodo(id, todo));
  };

  return (
    <li className='todo__container' id={id} key={id}>
      {/* todo를 클릭하면 상세페이지로 이동 */}
      <p className='todo' onClick={() => navigate(`/${id}`)}>
        {todo}
      </p>
      <div className='buttons'>
        <Button handleClick={handleDelete} value='삭제' />
        {/* 완료된 todo는 취소버튼 표시, 완료되지 않은 todo는 완료버튼 표시 */}
        <Button handleClick={handleToggle} value={isDone ? '취소' : '완료'} />
      </div>
    </li>
  );
}
