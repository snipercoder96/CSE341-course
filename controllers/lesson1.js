const mongoDb = require('../models/db/connection');
const ObjectId = require('mongodb').ObjectId;// Import ObjectId from mongoose if needed for MongoDB operations

/* -----------Example CRUD Operations------------- */
const addNewPost = async (req, res) => {
    try {
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

        const newPost = {
            firstName,
            lastName,
            email,
            favoriteColor,
            birthday: birthday ? new Date(birthday) : undefined,
            createdAt: new Date()
        };

        const result = await mongoDb.getDb().collection('posts').insertOne(newPost);
        res.status(201).json({ _id: result.insertedId, ...newPost }); //concatenate the insertedId with the newPost object to return the complete post data
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const viewAllPosts = async (req, res) => {
    try {
        const posts = await mongoDb.getDb().collection('posts').find().toArray();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

        const result = await mongoDb.getDb().collection('posts').findOneAndUpdate(
            { _id: new ObjectId(id) },
            {
                $set: {
                    firstName,
                    lastName,
                    email,
                    favoriteColor,
                    birthday: birthday ? new Date(birthday) : undefined
                }
            },
            { returnDocument: 'after' }
        );

        if (!result) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await mongoDb.getDb().collection('posts').findOneAndDelete(
            { _id: new ObjectId(id) }
        );
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/* ---------------------------------------------------------------------------------- */
const lesson1 = (req, res) => {
    res.send("hello CSE341");
};

const getProfessional = (req, res) => {
    res.json({
        professionalName: "Kevin Mbemba",
        base64Image: "iVBORw0KGgoAAAANSUhEUgAA...", // your Base64 string
        nameLink: {
            firstName: "Kevin",
            url: "https://github.io/kevin-dev578/web-dev-lab/"
        },
        primaryDescription: "Web developer passionate about APIs and backend systems.",
        workDescription1: "Built scalable Node.js services.",
        workDescription2: "Experienced with PostgreSQL and authentication flows.",
        linkTitleText: "Find me online:",
        linkedInLink: {
            text: "LinkedIn Profile",
            link: "https://linkedin.com/in/kevin-mbemba-kiyindou-4a49502b6"
        },
        githubLink: {
            text: "GitHub Repos",
            link: "https://github.com/snipercoder96"
        }
    });
};




module.exports = {
    lesson1, getProfessional, addNewPost, viewAllPosts, updatePost, deletePost
};