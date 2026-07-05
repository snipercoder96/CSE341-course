const mongoDb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const getAllUsers = async (req, res) => {
    const result = await mongoDb.getDb().collection('users').find(); // this finds all users in the collection that is named 'users' in the database. The result is a cursor that can be used to iterate over the documents in the collection.
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

const getsingleUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const user = await mongoDb.getDb().collection('users').findOne({ _id: userId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(user);
};


module.exports = {
    getAllUsers,
    getsingleUser
};
