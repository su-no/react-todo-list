import { v4 as uuid } from 'uuid';
import initialTodos from '../../assets/data/initialTodos';

// Action Values
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';

// Action Creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  newTodo: { todo, isDone: false, id: uuid() },
});
export const toggleTodo = (id, todo) => ({ type: TOGGLE_TODO, id, todo });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });

// Initial State
const initialState = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : initialTodos;

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // todo를 추가한 새로운 배열을 반환
      return [...state, action.newTodo];
    case TOGGLE_TODO:
      // 선택한 todo의 isDone 값을 바꾼 새로운 배열을 반환
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    case DELETE_TODO:
      // 선택한 todo를 제외한 새로운 배열을 반환
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

// Export Default
export default todos;
