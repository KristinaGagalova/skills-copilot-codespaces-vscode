// Create web server
const express = require('express');
const app = express();
// Create a port
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
    res.send('This is a comments page');
});

// Listen to the port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Run the server
// $ node comments.js
// Output: Server is running at http://localhost:3000
// Open your browser and go to http://localhost:3000/comments
// Output: This is a comments page