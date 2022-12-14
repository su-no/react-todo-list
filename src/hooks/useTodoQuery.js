import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { SERVER_URL } from '../common/axios/constant';

const fetchTodoList = async () => {
  const { data } = await axios.get(`${SERVER_URL}/todos`);
  return data;
};

export const useTodoQuery = () => {
  const { isLoading, data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  });

  const activeTodos = todos?.filter(({ isDone }) => !isDone);
  const doneTodos = todos?.filter(({ isDone }) => isDone);

  return { isLoading, activeTodos, doneTodos };
};
