import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './shared/router';
import './App.css';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
