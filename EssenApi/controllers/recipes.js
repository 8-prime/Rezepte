const { MongoClient, ServerApiVersion } = require('mongodb');
const Recipe = require('../models/recipe');
const Category = require('../models/category');
require('dotenv').config()

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const mongoPassword = encodeURIComponent(process.env['MONGO_DB_PASSWORD'] ?? "");
        const mongoUser = encodeURIComponent(process.env['MONGO_DB_USER'] ?? "");

        const uri = `mongodb+srv://${mongoUser}:${mongoPassword}@recipecluster.gmul1mc.mongodb.net/?retryWrites=true&w=majority`;

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });


        const db = client.db('recipes');
        const collection = db.collection('recipes');

        const cursor = collection.find();

        const recipes = await cursor.toArray();

        console.log(recipes);

        client.close();

        res.status(200).json(recipes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.addNewRecipe = async (req, res) => {
    try{
        const newRecipe = req.body;

        const mongoPassword = encodeURIComponent(process.env['MONGO_DB_PASSWORD'] ?? "");
        const mongoUser = encodeURIComponent(process.env['MONGO_DB_USER'] ?? "");

        const uri = `mongodb+srv://${mongoUser}:${mongoPassword}@recipecluster.gmul1mc.mongodb.net/?retryWrites=true&w=majority`;

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });


        const db = client.db('recipes');
        const collection = db.collection('recipes');

        const result = collection.insertOne(newRecipe);

        res.status(200).json({ message: 'New Category has been added'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};