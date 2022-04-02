const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views')


app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.get('/index', (req, res) => {
    res.render('index');
});


module.exports = app;
