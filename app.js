const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT);

// Serve static files....
app.use(express.static(__dirname + '/dist/TicTacToe'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/TicTacToe/index.html'));
});
