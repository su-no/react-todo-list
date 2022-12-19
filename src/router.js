import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import MyTodoList from './pages/MyTodoList';
import TodoDetail from './components/TodoDetail/TodoDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<NotFound />}>
      <Route index={true} element={<TodoDetail />} />
      <Route path='/:todoId' element={<MyTodoList />} />
    </Route>
  )
);

export default router;
