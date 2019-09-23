import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 40px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #a3a3a3;
`;

const BigInput = styled.input`
  flex: 1;
  margin: 0;
  padding-left: 10px;
  font-size: 110%;
  border: 0 !important;
  border-bottom-left-radius: 5px;
  margin-left: 1px;
  margin-bottom: 1px;
`;

const SubmitButton = styled.button`
  width: 70px;
  background-color: #3832a8;
  color: #fff;
  font-size: 110%;
  border-bottom-right-radius: 5px;
`;

export const ChatInput = ({
    draftMessage,
    onDraftMessageChange,
    sendMessageByKeyboard,
    sendMessage
}) => {
    return (
        <Wrapper>
            <BigInput
                name="draft-message"
                value={draftMessage}
                onChange={onDraftMessageChange}
                onKeyPress={sendMessageByKeyboard}
            />
            <SubmitButton onClick={sendMessage}>
                Send
            </SubmitButton>
        </Wrapper>
    );
};
