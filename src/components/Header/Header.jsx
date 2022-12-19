import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Header({ children }) {
  const navigate = useNavigate();

  return (
    <h1 className='title' onClick={() => navigate('/')}>
      {children}
    </h1>
  );
}
