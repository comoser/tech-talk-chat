import React, { useState } from 'react';

function useChatMessages(initialState) {
  const [messages, setMessages] = useState(initialState);

  function addMessage(message) {
      setMessages([...messages, message]);
  }

  return [messages, addMessage];
}

export default useChatMessages;
