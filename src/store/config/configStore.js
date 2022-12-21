import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todosSlice';

export default configureStore({
  reducer: { todos },
});
