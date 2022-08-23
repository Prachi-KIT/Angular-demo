//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory 
//app.use(express.static('../../assets'));
app.use(express.static('./src/assets/img'))

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: './src/dist/Shopping-and-Receipe'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);