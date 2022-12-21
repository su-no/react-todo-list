import React from 'react';
import * as styled from './Button.style';

export default function Button({ handleClick, value }) {
  return <styled.Button onClick={handleClick}>{value}</styled.Button>;
}
