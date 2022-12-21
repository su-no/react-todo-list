import styled from 'styled-components';

export const Button = styled.button`
  color: rgba(0, 0, 0, 0.9);
  font-family: 'Gowun Batang', serif;
  background-color: #ffffff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8125rem;
  line-height: 29px;
  margin: 0 0.5rem;
  padding: 0.2rem 1rem;
  position: relative;
  text-align: center;
  width: 5rem;
  &:hover {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;
