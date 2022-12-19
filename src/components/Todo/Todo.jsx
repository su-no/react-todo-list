import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/modules/todos';
import './style.css';
import Button from '../Button/Button';

export default function Todo({ todo, isDone, id }) {
  const dispatch = useDispatch();

  // todo를 클릭하면 상세페이지로 이동
  const handleClick = () => {
    console.log(`{${todo}} 상세 페이지로 이동`);
  };

  // todo 제거하는 함수
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  // todo 상태를 업데이트 하는 함수
  const handleToggle = () => {
    dispatch(toggleTodo(id, todo));
  };

  return (
    <li className='todo__container' id={id} key={id} onClick={handleClick}>
      <p className='todo'>{todo}</p>
      <div className='buttons'>
        <Button handleClick={handleDelete} value='삭제' />
        {/* 완료된 todo는 취소버튼 표시, 완료되지 않은 todo는 완료버튼 표시 */}
        <Button handleClick={handleToggle} value={isDone ? '취소' : '완료'} />
      </div>
    </li>
  );
}
