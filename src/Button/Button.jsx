import React from 'react';
import './style.css';

export default function Button({ handleClick, value }) {
  return (
    <button className='btn' onClick={handleClick}>
      {value}
    </button>
  );
}
