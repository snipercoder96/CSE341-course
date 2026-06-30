const routes = require('express').Router();
const serverControllers = require("../controllers/lesson1"); // ensure to import using common.js

routes.get('/', serverControllers.lesson1); 

module.exports = routes;