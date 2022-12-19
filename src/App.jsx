import './App.css';
import Header from './components/Header/Header';
import AddForm from './components/AddForm/AddForm';
import TodoList from './components/TodoList/TodoList';

export default function App() {
  return (
    <div className='container'>
      {/* 제목 */}
      <Header>Hyojin's To Do List</Header>
      {/* Todo 입력하고 추가하는 form */}
      <AddForm />
      {/* active/done 투두리스트 */}
      <div className='todo-lists'>
        <TodoList name='active' />
        <TodoList name='done' />
      </div>
    </div>
  );
}
