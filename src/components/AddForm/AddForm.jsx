import { useInput } from '../../hooks';
import * as styled from './AddForm.style';
import Button from '../common/Button/Button';

export default function AddForm() {
  const { visible, handleSubmit, todoValue, handleChange } = useInput();

  return (
    <styled.TodoFormContainer>
      <styled.TodoForm onSubmit={handleSubmit}>
        <styled.TodoLabel htmlFor='new-todo'>To Do </styled.TodoLabel>
        <styled.TodoInput
          type='text'
          id='new-todo'
          name='new-todo'
          onChange={handleChange}
          autoFocus={true}
          value={todoValue}
        />
        <styled.TodoInputErrorMessage visible={visible}>
          내용을 입력하세요.
        </styled.TodoInputErrorMessage>
        <Button value='추가' />
      </styled.TodoForm>
    </styled.TodoFormContainer>
  );
}
