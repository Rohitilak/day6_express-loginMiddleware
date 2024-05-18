// app.js
const express = require('express');
const loggerMiddleware = require('./loginMiddleware');

const app = express();
const port = 3000;

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
