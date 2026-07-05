const dotenv = require('dotenv');
dotenv.config();

const routers = require('./routes/index');
const mongoDb = require("./db/connection");

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();


(async function startServer() {
    try {
        await mongoDb.initDb();
        app.listen(PORT, () => {
            console.log(`Server is running on port: http://localhost:${PORT}/`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
})();


app.use(routers);




