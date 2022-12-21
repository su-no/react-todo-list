import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import styled from 'styled-components';

export default function Root() {
  return (
    <Container className='container'>
      <Header>Hyojin's To Do List</Header>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  color: rgba(0, 0, 0, 0.9);
  background-color: rgba(256, 256, 256, 0.7);
  border-radius: 30px;
  font-family: 'Gowun Batang', serif;
  width: 80%;
  min-height: 90vh;
  max-width: 1200px;
  min-width: 800px;
  padding: 4rem;
  margin: 2rem auto;
  box-sizing: border-box;
`;
