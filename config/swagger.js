const swaggerAutogen = require('swagger-autogen')();


const doc = {
    info: {
        title: 'COntacts API',
        description: 'An API for managing contacts, allowing users to create, read, update, and delete contact information.',
        version: '1.0.0',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    tags: [
        {
            name: 'Contacts',
            description: 'Endpoints for managing contacts',
        },
    ],
    definitions: {
        ContactInput: {
            type: 'object',
            required: ['firstName', 'lastName', 'email'],
            properties: {
                firstName: { type: 'string', example: 'John' },
                lastName: { type: 'string', example: 'Doe' },
                email: { type: 'string', example: 'john@example.com' },
                favoriteColor: { type: 'string', example: 'Blue' },
                birthday: { type: 'string', format: 'date', example: '1990-01-01' },
            },
        },
        Contact: {
            type: 'object',
            properties: {
                _id: { type: 'string', example: '64c1f0b2a5d9e2c3b4a5d6e7' },
                firstName: { type: 'string', example: 'John' },
                lastName: { type: 'string', example: 'Doe' },
                email: { type: 'string', example: 'john@example.com' },
                favoriteColor: { type: 'string', example: 'Blue' },
                birthday: { type: 'string', format: 'date', example: '1990-01-01' },
                createdAt: { type: 'string', format: 'date-time' },
            },
        },
    },
};

const outputFile = './config/swagger-output.json'; // output file
const endpointsFiles = ['./routes/contacts.js']; // contacts-only documentation

swaggerAutogen(outputFile, endpointsFiles, doc);

