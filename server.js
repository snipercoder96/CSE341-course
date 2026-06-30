const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello CSE341");
});

app.listen(process.env.port || 3000);
console.log(`App is lisening at port ${process.env.port || 3000}`);