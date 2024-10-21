// frontend/src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Room from './components/Room';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState('');

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleRoomJoin = (room) => {
    setRoom(room);
    socket.emit('joinRoom', room);
  };

  return (
    <div style={styles.app}>
      <h1>Real-Time Chat App</h1>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : room ? (
        <Room socket={socket} room={room} user={user} />
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter room name"
            onChange={(e) => handleRoomJoin(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
};

export default App;
