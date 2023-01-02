import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    initializeTodos: (todos, { payload }) => {
      todos.push(...payload);
    },
    addTodo: (todos, { payload }) => {
      todos.push({
        id: nanoid(),
        isDone: false,
        todo: payload,
      });
    },
    deleteTodo: (todos, { payload }) => {
      const idx = todos.findIndex(({ id }) => id === payload);
      todos.splice(idx, 1);
    },
    toggleTodo: (todos, { payload }) => {
      const idx = todos.findIndex(({ id }) => id === payload);
      todos[idx].isDone = !todos[idx].isDone;
    },
  },
});

export const { initializeTodos, addTodo, deleteTodo, toggleTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
