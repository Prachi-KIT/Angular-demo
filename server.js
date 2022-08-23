//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory 
app.use(express.static('./dist/Shopping-and-Receipe'));
//app.use(express.static('./src/assets/img'))

app.get('/*', (req, res) =>
    res.sendFile('index.html', {path: './dist/Shopping-and-Receipe/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);