// backend/server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

let rooms = {};

// Handle socket connection
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // Join room
  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room: ${room}`);

    // Send previous messages if any
    if (rooms[room]) {
      socket.emit('previousMessages', rooms[room]);
    }
  });

  // Handle message sending
  socket.on('sendMessage', ({ room, message }) => {
    if (!rooms[room]) {
      rooms[room] = [];
    }
    rooms[room].push(message);
    io.to(room).emit('receiveMessage', message);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
