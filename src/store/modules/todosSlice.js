import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    initializeTodos: (state, action) => {
      state.push(...action.payload);
    },
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

export const { initializeTodos, addTodo, deleteTodo, toggleTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
