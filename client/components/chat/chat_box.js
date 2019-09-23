import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import uuidLib from 'uuid/v1';
import styled from 'styled-components';

import useChatMessages from '../../hooks/chat_messages';
import { ChatItem } from './chat_item';
import { ChatInput } from './chat_input';

const ChatBoxWrapper = styled.div`
    position: fixed;
    width: 375px;
    height: 60vh;
    border-radius: 5px;
    border: 1px solid #a3a3a3;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
`;

const Scroller = styled.div`
  overflow: scroll;
  height: calc(100% - 40px);
`;

export const ChatBox = () => {
    let scrollerRef = null;
    const [uuid, setUuid] = useState(null);
    const [socket, setSocket] = useState(null);
    const [draftMessage, setDraftMessage] = useState('');
    const [messages, addMessage] = useChatMessages([]);
    const [messageHistory, setMessageHistory] = useState([]);

    const fetchHistory = async () => {
        const response = await fetch(`${process.env.API_URL}/history`);
        const messagesJson = await response.json();
        setMessageHistory(messagesJson.response);
    };

    useEffect(() => {
        setSocket(socketio.connect(process.env.API_URL));
        setUuid(uuidLib());
        fetchHistory();
    }, []);

    useEffect(() => {
        if (scrollerRef) scrollerRef.scrollTop = scrollerRef.scrollHeight;
    });

    if (socket) {
        socket.on('CHAT_MESSAGE_RECEIVED', (chatMessageContent) => {
            addMessage(chatMessageContent);
        });
    }

    const onDraftMessageChange = (e) => {
        setDraftMessage(e.target.value);
    };

    const sendMessage = () => {
        socket.emit('CHAT_MESSAGE_SENT', {
            uuid,
            message: draftMessage,
        });
        if (scrollerRef) {
            scrollerRef.scrollTop = scrollerRef.scrollHeight;
            setDraftMessage('');
        }
    };

    const sendMessageByKeyboard = (e) => {
        if (e.which === 13) {
            socket.emit('CHAT_MESSAGE_SENT', {
                uuid,
                message: draftMessage,
            });
            if (scrollerRef) {
                scrollerRef.scrollTop = scrollerRef.scrollHeight;
                setDraftMessage('');
            }
        }
    };

    const renderHistoryMessages = () => {
        return messageHistory.map((messageWrapper, index) => {
            return (
                <ChatItem
                    key={String(index)}
                    uuid={uuid}
                    messageWrapper={messageWrapper}
                />
            );
        });
    };

    const renderMessages = () => {
        return messages.map((messageWrapper, index) => {
            return (
                <ChatItem
                    key={String(index)}
                    uuid={uuid}
                    messageWrapper={messageWrapper}
                />
            );
        });
    };

    return (
        <>
            <ChatBoxWrapper>
                <Scroller ref={ref => scrollerRef = ref}>
                    {renderHistoryMessages()}
                    {renderMessages()}
                </Scroller>
                <ChatInput
                    draftMessage={draftMessage}
                    onDraftMessageChange={onDraftMessageChange}
                    sendMessage={sendMessage}
                    sendMessageByKeyboard={sendMessageByKeyboard}
                />
            </ChatBoxWrapper>
        </>
    );
};
