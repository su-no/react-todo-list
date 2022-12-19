import React from 'react';
import Button from '../Button/Button';
import './style.css';

export default function Todo({ todo, isDone, id, setTodos }) {
  // todo 제거하는 함수
  const deleteTodo = () => {
    // 해당 todo를 제외한 todos 배열을 업데이트
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // todo 상태를 업데이트 하는 함수
  const updateTodo = () => {
    setTodos((prev) =>
      prev.map((t) => {
        // 해당 todo의 isDone을 false로 변경
        if (t.id === id) {
          return { ...t, isDone: !t.isDone };
        }
        // 다른 todo는 그대로 반환
        return t;
      })
    );
  };

  return (
    <li className='todo__container' id={id} key={id}>
      <p className='todo'>{todo}</p>
      <div className='buttons'>
        <Button handleClick={deleteTodo} value='삭제' />
        {/* 완료된 todo는 취소버튼 표시, 완료되지 않은 todo는 완료버튼 표시 */}
        <Button handleClick={updateTodo} value={isDone ? '취소' : '완료'} />
      </div>
    </li>
  );
}
