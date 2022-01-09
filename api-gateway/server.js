const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var cors = require('cors');
const morgan = require('morgan');

// let db = require('./db.json');
app.use(cors());
server.use(bodyParser.json());  // ให้ server(express) ใช้งานการ parse json
app.get('/', function (req, res) {
    res.send(" api-gateway");
});

app.get('/api/trips', async (req, res) => {
        const keyword = req.query.keyword;
        const response = await fetch(`http://localhost:9000/trips?q=${keyword}`);
        const data = await response.json();
        res.send(data);
});

app.listen(8000, () => {
    console.log('Server Listen at http://localhost:8000');
    // console.log('Users :', users)
});