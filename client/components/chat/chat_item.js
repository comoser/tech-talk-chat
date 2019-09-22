import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  position: relative;
    padding: 10px 16px;
    font-family: sans-serif;
    &.self {
      text-align: right;
    }
`;

const Indicator = styled.div`
  position: absolute;
  top: 50%;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #969696;
  transform: translate(0, -50%);
  &.other {
    left: 5px;  
  }
  &.self {
    right: 5px;
    background-color: #5435ff;
  }
`;

export const ChatItem = ({ uuid, messageWrapper }) => {
    const selfMessage = messageWrapper.uuid === uuid;

    return (
        <Item className={selfMessage ? 'self' : ''}>
            <Indicator className={selfMessage ? 'self' : 'other'}/>
            {selfMessage ? 'ME: ':''}{messageWrapper.message}
        </Item>
    )
};
