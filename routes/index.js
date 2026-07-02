const routes = require('express').Router();
const serverControllers = require("../controllers/lesson1"); // ensure to import using common.js
const proffesionalController = require("../controllers/lesson1"); // ensure to import using common.js

routes.get('/', serverControllers.lesson1); 
routes.get('/professional', proffesionalController.getProfessional); // W01 activity for CSE341

module.exports = routes;