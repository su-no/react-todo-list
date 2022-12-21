import styled from 'styled-components';

export const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 8px;
  padding: 2rem 4rem;
  margin: 2rem;
  min-height: 400px;
  background-color: rgba(256, 256, 256, 0.7);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  line-height: 2.5;
  &::after {
    content: '';
    display: block;
    /* width: 100%; */
    border-bottom: 1px dotted black;
    margin: 1rem 0 1.5rem 0;
  }
`;
