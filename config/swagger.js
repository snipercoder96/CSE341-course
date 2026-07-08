const swaggerAutogen = require('swagger-autogen')();


const doc = {
    info: {
        title: 'My API',
        description: 'API documentation',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js']; // main file with routes

swaggerAutogen(outputFile, endpointsFiles, doc);

