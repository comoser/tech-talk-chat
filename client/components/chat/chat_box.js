import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import socketio from 'socket.io-client';
import uuidLib from 'uuid/v1';

import useChatMessages from '../../hooks/chat_messages';

export const ChatBox = () => {
    const [uuid, setUuid] = useState(null);
    const [socket, setSocket] = useState(null);
    const [draftMessage, setDraftMessage] = useState('');
    const [messages, addMessage] = useChatMessages([]);

    useEffect(() => {
        const socket = socketio.connect('http://localhost:8007');
        const uuidValue = uuidLib();
        setSocket(socket);
        setUuid(uuidValue);
        socket.on('CHAT_MESSAGE_RECEIVED', (chatMessageContent) => {
            addMessage(chatMessageContent.message);
            if (chatMessageContent.uuid === uuidValue) {
                console.log('IT WAS ME');
            } else {
                console.log('NOT ME');
            }
        });
    }, []);

    const onDraftMessageChange = (e) => {
        setDraftMessage(e.target.value);
    };

    const sendMessage = () => {
        socket.emit('CHAT_MESSAGE_SENT', {
            uuid,
            message: draftMessage,
        });
    }

    return (
        <div>
            <ul>
                {
                    messages.map((msg) => {
                        return (
                            <li key={msg}>{msg}</li>
                        );
                    })
                }
            </ul>
            <input
                name="draft-message"
                value={draftMessage}
                onChange={onDraftMessageChange}
            />
            <button onClick={sendMessage}>
                Send Message
            </button>
        </div>
    );
};

ChatBox.propTypes = {

};

ChatBox.defaultProps = {

};
