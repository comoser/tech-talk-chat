import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import socketio from 'socket.io-client';
import uuidLib from 'uuid/v1';

export const ChatBox = () => {
    const [uuid, setUuid] = useState(null);
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = socketio.connect('http://localhost:8007');
        const uuidValue = uuidLib();
        setSocket(socket);
        setUuid(uuidValue);
        socket.on('CHAT_MESSAGE_RECEIVED', (chatMessageContent) => {
            console.log(chatMessageContent);
            setMessages([...messages, chatMessageContent.message]);
            console.log(chatMessageContent.uuid, uuidValue);
            if (chatMessageContent.uuid === uuidValue) {
                console.log('IT WAS ME');
            } else {
                console.log('NOT ME');
            }
        });
    }, []);

    useEffect(() => {
        console.log(messages);
    });

    const onMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const sendMessage = () => {
        socket.emit('CHAT_MESSAGE_SENT', {
            uuid,
            message,
        });
    }

    return (
        <div>
            <input
                name="chat-message"
                value={message}
                onChange={onMessageChange}
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
