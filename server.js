const dotenv = require('dotenv');
dotenv.config();
const serverControllers = require("./controllers/lesson1");
const routers = require('./routes/index');
const mongoDbConnect = require("./db/connection");
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const testPort = 8080;

const express = require('express');
const app = express();
app.use(cors());


app.use(routers);

(async function startServer() {
    try {
        //await mongoDbConnect.connectToMongoDB();
        app.listen(testPort, () => {
            console.log(`Web server is listening at ${testPort}`);
        });
    } catch (err) {
        console.error(`Failed to start server: ${err}`);
    }
})();


