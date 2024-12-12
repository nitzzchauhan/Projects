const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set 'views' folder and EJS as the templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Sample data: list of users
const users = [
  { name: 'John Doe', age: 25, occupation: 'Developer' },
  { name: 'Jane Smith', age: 30, occupation: 'Designer' },
  { name: 'Michael Johnson', age: 35, occupation: 'Product Manager' },
];

// Basic route for rendering index.ejs with dynamic data
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Dynamic EJS Page',
    users: users,  // Pass the users data to the template
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
