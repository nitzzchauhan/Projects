// frontend/src/components/Message.js
import React from 'react';

const Message = ({ text, sender }) => {
  return (
    <div style={styles.message}>
      <strong>{sender}: </strong>{text}
    </div>
  );
};

const styles = {
  message: {
    padding: '5px 0',
    borderBottom: '1px solid #eaeaea',
  },
};

export default Message;
