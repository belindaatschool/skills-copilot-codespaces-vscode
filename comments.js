// Create web server and handle requests
// Run: node .github/comments.js

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse request body as JSON
app.use(bodyParser.json());

// Handle GET requests to /
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Handle POST requests to /comments
app.post('/comments', (req, res) => {
  // Do something with the GitHub comment
  console.log(req.body.comment.body);

  // Send a success response
  res.status(200).end();
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
