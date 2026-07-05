const routes = require('express').Router();
const serverControllers = require("../controllers/lesson1"); // ensure to import using common.js
const proffesionalController = require("../controllers/lesson1"); // ensure to import using common.js
const usersController = require("../controllers/users"); // ensure to import using common.js

routes.get('/', serverControllers.lesson1);
//routes.get('/professional', proffesionalController.getProfessional); // W01 activity for CSE341

routes.get('/users', usersController.getAllUsers); // Ensure to import using common.js
routes.get('/users/:id', usersController.getsingleUser); // Ensure to import using common.js
module.exports = routes;