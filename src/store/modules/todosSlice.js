import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import initialTodos from '../../assets/data/initialTodos';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: readLocalStorageTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: uuid(),
        isDone: false,
        todo: action.payload,
      });
    },
    deleteTodo: (state, action) => {
      const idx = state.findIndex((t) => t.id === action.payload);
      state.splice(idx, 1);
    },
    toggleTodo: (state, action) => {
      const idx = state.findIndex((t) => t.id === action.payload);
      state[idx].isDone = !state[idx].isDone;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;

function readLocalStorageTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(localStorage.getItem('todos')) : initialTodos;
}
