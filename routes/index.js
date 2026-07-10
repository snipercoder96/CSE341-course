const routes = require('express').Router();
const exampleController = require('../controllers/lesson1'); // ensure to import using common.js
const usersController = require('../controllers/users'); // ensure to import using common.js
const APIDocumentation = require('../controllers/api-doc'); // ensure to import using common.js

routes.get('/', exampleController.lesson1);
routes.get('/documentation', (req, res) => {
    res.json(APIDocumentation);
});
routes.get('/swagger.json', (req, res) => {
    res.json(APIDocumentation);
});
//routes.get('/professional', proffesionalController.getProfessional); // W01 activity for CSE341

routes.get('/users', usersController.getAllUsers); // Ensure to import using common.js
routes.get('/users/:id', usersController.getsingleUser); // Ensure to import using common.js

module.exports = routes; // exported to default