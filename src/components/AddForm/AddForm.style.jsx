import styled from 'styled-components';

export const TodoFormContainer = styled.div`
  padding: 2rem;
  margin: 2rem 0;
`;

export const TodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const TodoLabel = styled.label`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0.5rem;
`;

export const TodoInput = styled.input`
  background-color: rgba(256, 256, 256, 0.7);
  font-family: 'Gowun Batang', serif;
  border: none;
  padding: 0.5rem;
  flex: 1 0 auto;
  height: 1.2rem;
  font-size: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 8px;
`;

export const TodoInputErrorMessage = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  left: 100px;
  top: 50px;
  color: #e17aa0;
`;
