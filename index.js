const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

const about = require('./JSON/About.json');
const portfolio = require('./JSON/Portfolio.json');

app.get('/about', (req, res) => {
    res.json(about);
});

app.get('/portfolio', (req, res) => {
    res.json(portfolio);
});

app.get('/', (req, res) => {
    res.send('Server On');
});

app.listen(port, () =>{
    console.log(`listening on port : ${port}`);
});