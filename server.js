const dotenv = require('dotenv');
dotenv.config();
const serverControllers = require("./controllers/lesson1");
const routers = require('./routes/index');

const express = require('express');
const app = express();

app.use(routers);

app.listen(process.env.PORT || 3000);
console.log(`Web server is lisening at port ${process.env.PORT || 3000}`);