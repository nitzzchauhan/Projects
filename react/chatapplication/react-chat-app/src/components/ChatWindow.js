// frontend/src/components/ChatWindow.js
import React from 'react';
import Message from './Message';

const ChatWindow = ({ messages }) => {
  return (
    <div style={styles.chatWindow}>
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
};

const styles = {
  chatWindow: {
    width: '80%',
    height: '70vh',
    backgroundColor: '#fff',
    padding: '10px',
    overflowY: 'auto',
    border: '1px solid #ccc',
    marginBottom: '10px',
    borderRadius: '8px',
  },
};

export default ChatWindow;
