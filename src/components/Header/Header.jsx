import React from 'react';
import './style.css';

export default function Header({ children }) {
  return <h1 className='title'>{children}</h1>;
}
