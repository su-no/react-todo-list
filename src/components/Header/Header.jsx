import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './Header.style';

export default function Header({ children }) {
  const navigate = useNavigate();

  return <styled.Title onClick={() => navigate('/')}>{children}</styled.Title>;
}
