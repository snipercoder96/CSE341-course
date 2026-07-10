const express = require('express');
const router = express.Router();
const contactServers = require('../controllers/contacts');

/*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Create a new contact'
    #swagger.description = 'Adds a new contact to the database.'
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Contact information',
        required: true,
        schema: { $ref: '#/definitions/ContactInput' }
    }
    #swagger.responses[201] = { description: 'Contact created successfully' }
    #swagger.responses[400] = { description: 'Invalid request' }
*/
router.post('/contacts', contactServers.addNewContacts);

/*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Get all contacts'
    #swagger.description = 'Returns every contact stored in the database.'
    #swagger.responses[200] = { description: 'Successful operation' }
    #swagger.responses[400] = { description: 'Invalid request' }
*/
router.get('/contacts', contactServers.viewAllContacts);

/*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Get one contact'
    #swagger.description = 'Returns a single contact by its ID.'
    #swagger.parameters['id'] = { in: 'path', description: 'Contact ID', required: true, type: 'string' }
    #swagger.responses[200] = { description: 'Contact found' }
    #swagger.responses[404] = { description: 'Contact not found' }
    #swagger.responses[400] = { description: 'Invalid request' }
*/
router.get('/contacts/:id', contactServers.viewSecificContact);

/*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Update a contact'
    #swagger.description = 'Updates an existing contact by ID.'
    #swagger.parameters['id'] = { in: 'path', description: 'Contact ID', required: true, type: 'string' }
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Fields to update',
        required: true,
        schema: { $ref: '#/definitions/ContactInput' }
    }
    #swagger.responses[200] = { description: 'Contact updated successfully' }
    #swagger.responses[404] = { description: 'Contact not found' }
    #swagger.responses[400] = { description: 'Invalid request' }
*/
router.put('/contacts/:id', contactServers.updateContact);

/*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Delete a contact'
    #swagger.description = 'Deletes a contact from the database by ID.'
    #swagger.parameters['id'] = { in: 'path', description: 'Contact ID', required: true, type: 'string' }
    #swagger.responses[200] = { description: 'Contact deleted successfully' }
    #swagger.responses[404] = { description: 'Contact not found' }
    #swagger.responses[400] = { description: 'Invalid request' }
*/
router.delete('/contacts/:id', contactServers.deleteContact);

module.exports = router;
