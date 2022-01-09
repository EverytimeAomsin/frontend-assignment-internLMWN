const express = require('express');
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var cors = require('cors');

app.use(cors());
// server.use(morgan('dev')); // ให้ server(express) ใช้งานการ morgam module
app.get('/', function (req, res) {
    res.send("api-gateway");
});

app.get('/api/trips', async (req, res) => {

    const keyword = req.query.keyword;
    const response = await fetch(`http://localhost:9000/trips?q=${keyword}`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.listen(8000, () => {
    console.log('Server Listen at http://localhost:8000');
    // console.log('db :', db)
});

// server.get('/trips', function (req, res, next) {
//     return res.status(200).json({
//       code: 1,
//       message: 'OK',
//       data: trips
//     })
//   });