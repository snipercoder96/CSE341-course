const contactsController = require("./contacts");

// Wrap your existing controller functions so they're callable
// as plain async functions instead of (req, res) handlers.
const methods = {
    listContacts: async () => {
        return await contactsController.viewAllContacts(); // adjust name to match yours
    },
    getContact: async ({ id }) => {
        const contact = await contactsController.viewSpecificContact(id); // adjust name
        if (!contact) throw { code: -32001, message: `No contact with id ${id}` };
        return contact;
    },
    addContact: async (params) => {
        return await contactsController.addNewContacts(params); // adjust name
    },
};

module.exports = { methods };