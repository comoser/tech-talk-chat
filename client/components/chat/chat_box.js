import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import uuidLib from 'uuid/v1';

import useChatMessages from '../../hooks/chat_messages';

export const ChatBox = () => {
    const [uuid, setUuid] = useState(null);
    const [socket, setSocket] = useState(null);
    const [draftMessage, setDraftMessage] = useState('');
    const [messages, addMessage] = useChatMessages([]);
    const [messageHistory, setMessageHistory] = useState([]);

    useEffect(async () => {
        setSocket(socketio.connect(process.env.API_URL));
        setUuid(uuidLib());
        const response = await fetch(`${process.env.API_URL}/history`);
        const messagesJson = await response.json();
        setMessageHistory(messagesJson.response);
    }, []);

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
    }

    const sendMessageByKeyboard = (e) => {
        if (e.which === 13) {
            socket.emit('CHAT_MESSAGE_SENT', {
                uuid,
                message: draftMessage,
            });
        }
    }

    return (
        <div>
            <ul>
                {
                    messageHistory.map((item) => {
                        return (
                            <li
                                key={item.message}
                            >
                                {item.uuid === uuid ? 'ME: ':''}{item.message}
                            </li>
                        );
                    })
                }
                {
                    messages.map((messageWrapper) => {
                        return (
                            <li
                                key={messageWrapper.message}
                            >
                                {messageWrapper.uuid === uuid ? 'ME: ' : ''}{messageWrapper.message}
                            </li>
                        );
                    })
                }
            </ul>
            <input
                name="draft-message"
                value={draftMessage}
                onChange={onDraftMessageChange}
                onKeyPress={sendMessageByKeyboard}
            />
            <button onClick={sendMessage}>
                Send Message
            </button>
        </div>
    );
};
