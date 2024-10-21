// frontend/src/components/Room.js
import React, { useEffect, useState } from 'react';

import ChatInput from './ChatInput';
import ChatWindow from './ChatWindow';

const Room = ({ socket, room, user }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('previousMessages', (previousMessages) => {
      setMessages(previousMessages);
    });

    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('previousMessages');
      socket.off('receiveMessage');
    };
  }, [socket]);

  const handleSendMessage = (message) => {
    const newMessage = { text: message, sender: user };
    socket.emit('sendMessage', { room, message: newMessage });
  };

  return (
    <div>
      <h2>Room: {room}</h2>
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Room;
