import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTodo, toggleTodo } from '../../store/modules/todosSlice';
import Button from '../common/Button/Button';
import * as styled from './Todo.style';
import axios from 'axios';

export default function Todo({ todo, isDone, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // todo 제거하는 함수
  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteTodo(id));
      axios.delete(`http://localhost:3001/todos/${id}`);
    }
  };

  // todo 상태를 업데이트 하는 함수
  const handleToggle = () => {
    dispatch(toggleTodo(id, todo));
    axios.patch(`http://localhost:3001/todos/${id}`, { isDone: true });
  };

  return (
    <styled.TodoContainer id={id} key={id}>
      {/* todo를 클릭하면 상세페이지로 이동 */}
      <styled.Todo onClick={() => navigate(`/${id}`)}>{todo}</styled.Todo>
      <styled.Buttons>
        <Button handleClick={handleDelete} value='삭제' />
        {/* 완료된 todo는 취소버튼 표시, 완료되지 않은 todo는 완료버튼 표시 */}
        <Button handleClick={handleToggle} value={isDone ? '취소' : '완료'} />
      </styled.Buttons>
    </styled.TodoContainer>
  );
}
