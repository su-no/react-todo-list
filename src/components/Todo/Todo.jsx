import React from 'react';
import Button from '../../Button/Button';
import './style.css';

export default function Todo({ todo, isDone, id, setTodos }) {
  // todo 제거하는 함수
  const handleDelete = (e) => {
    // 해당 todo를 제외한 todos 배열을 업데이트
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // 완료된 todo 취소하는 함수
  const handleCancle = (e) => {
    setTodos((prev) =>
      prev.map((t) => {
        // 해당 todo의 isDone을 false로 변경
        if (t.id === id) {
          return { ...t, isDone: false };
        }
        // 다른 todo는 그대로 반환
        return t;
      }),
    );
  };

  // todo를 완료하는 함수
  const handleDone = (e) => {
    setTodos((prev) =>
      prev.map((t) => {
        // 해당 todo의 isDone을 true로 변경
        if (t.id === id) {
          return { ...t, isDone: true };
        }
        // 다른 todo는 그대로 반환
        return t;
      }),
    );
  };

  return (
    <li className='todo__container' id={id} key={id}>
      <p className='todo'>{todo}</p>
      <div className='buttons'>
        <Button handleClick={handleDelete} value='삭제' />
        {isDone ? (
          // 완료된 todo는 취소버튼 표시
          <Button handleClick={handleCancle} value='취소' />
        ) : (
          // 완료되지 않은 todo는 완료버튼 표시
          <Button handleClick={handleDone} value='완료' />
        )}
      </div>
    </li>
  );
}
