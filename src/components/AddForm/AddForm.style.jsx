import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 2rem;
  margin: 2rem 0;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0.5rem;
`;

export const Input = styled.input`
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
