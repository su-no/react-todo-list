import React, { useRef } from 'react';

export default function Todo({ todo, isDone, id, setTodos }) {
  const todoRef = useRef(null);

  const handleDelete = (e) => {
    const toDeleteId = todoRef.current.id;
    setTodos((prev) => prev.filter((t) => t.id !== toDeleteId));
  };

  const handleCancle = (e) => {
    const toUndoneId = todoRef.current.id;
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === toUndoneId) {
          return { ...t, isDone: false };
        }
        return t;
      }),
    );
  };

  const handleDone = (e) => {
    const toDoneId = todoRef.current.id;
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === toDoneId) {
          return { ...t, isDone: true };
        }
        return t;
      }),
    );
  };

  return (
    <li className='todo__container' id={id} key={id} ref={todoRef}>
      <p className='todo'>{todo}</p>
      <div className='buttons'>
        <button className='btn btn__delete' onClick={handleDelete}>
          삭제
        </button>
        {isDone ? (
          <button className='btn btn__cancle' onClick={handleCancle}>
            취소
          </button>
        ) : (
          <button className='btn btn__done' onClick={handleDone}>
            완료
          </button>
        )}
      </div>
    </li>
  );
}
