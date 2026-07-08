const dotenv = require('dotenv');
dotenv.config();

const routers = require('./routes/index');
const mongoDb = require("./models/db/connection");
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./config/swagger-output.json');

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
app.use(bodyParser.json()); // Uses body-parser middleware to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Uses body-parser middleware to parse URL-encoded request bodies

// Hook Swagger UI
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

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




