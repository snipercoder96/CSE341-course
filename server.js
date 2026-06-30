const dotenv = require('dotenv');
dotenv.config();
const serverControllers = require("./controllers/lesson1");
const routers = require('./routes/index');
const mongoDbConnect = require("./db/connection");

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.use(routers);

(async function startServer() {
    try {
        await mongoDbConnect.connectToMongoDB();
        app.listen(PORT, () => {
            console.log(`Web server is listening at ${PORT}`);
        });
    } catch (err) {
        console.error(`Failed to start server: ${err}`);
    }
})();


