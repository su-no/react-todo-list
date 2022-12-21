import styled from 'styled-components';

export const TodoContainer = styled.li`
  background-color: rgba(256, 256, 256, 0.7);
  list-style: none;
  padding: 2rem 1rem;
  margin: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 8px;
`;

export const Todo = styled.p`
  cursor: pointer;
  font-size: 1.2rem;
  padding-bottom: 2rem;
  &:hover {
    color: #e17aa0;
  }
`;

export const Buttons = styled.div`
  text-align: right;
`;
