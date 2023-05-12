const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const Recipe = require('../models/recipe');
const Category = require('../models/category');
require('dotenv').config()

// Get all recipes
exports.getAllCategories = async (req, res) => {
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
        const collection = db.collection('categories');

        const cursor = collection.find();

        const categories = await cursor.toArray();

        console.log(categories);

        client.close();

        res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.getCategoryById = async (req, res) => {
    try {
        const category = req.params.id;

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
        const collection = db.collection('categories');
        const categoryResult = await collection.findOne({_id: new ObjectId(category)});
        console.log(categoryResult);

        client.close();

        res.status(200).json(categoryResult);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};



exports.addNewCategory = async (req, res) => {
    try{
        const newCategory = req.body;

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
        const collection = db.collection('categories');

        const result = collection.insertOne(newCategory);

        res.status(200).json({ message: 'New Category has been added'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.addRecipeToCategory = async (req, res) => {
    try {
        const category = req.params.categoryId;
        const recipe = req.params.recipeId;

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
        const categoriesCollection = db.collection('categories');
        const recipeCollection = db.collection('recipes');

        categoriesCollection.updateOne(
            { _id: new ObjectId(category)}, 
            {$push: { recipeIds: new ObjectId(recipe)}}
        )

        recipeCollection.updateOne(
            {_id: new ObjectId(recipe)},
            {$push: { categoryIds: new ObjectId(category)}}
        )

        client.close();

        res.status(200).json({message: 'Relation has been created'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}