import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

export default function Root() {
  return (
    <div className='container'>
      <Header>Hyojin's To Do List</Header>
      <Outlet />
    </div>
  );
}
