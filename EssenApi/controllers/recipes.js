const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        client.close();

        res.status(200).json(recipes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getRecipeById = async (req, res) => {
    try {
        const id = req.params.id;

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

        const recipe = await collection.findOne({_id: new ObjectId(id)});

        client.close();

        res.status(200).json(recipe);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getRecipesForCategory = async (req, res) => {
    try {
        const id = req.params.id;

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

        console.log(id);

        const recipes = await collection.find({ categoryIds: { $in: [new ObjectId(id)] } }).toArray();


        console.log(recipes);

        client.close();

        res.status(200).json(recipes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.addNewRecipe = async (req, res) => {
    try{
        console.log("Adding new recipe");
        const newRecipe = req.body;

        newRecipe._id = new ObjectId();

        for (let index = 0; index < newRecipe.categoryIds.length; index++) {
            newRecipe.categoryIds[index] = new ObjectId(newRecipe.categoryIds[index]);
        }

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
        const cats = db.collection('categories');

        const result = collection.insertOne(newRecipe);

        cats.updateMany(
            { _id: { $in: newRecipe.categoryIds } }, 
            { $addToSet: { recipeIds:  newRecipe._id} }
        );

        res.status(200).json({ message: 'New Category has been added'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.removeRecipeById = async (req, res) => {
    try{
        console.log("Deleting Recipe");
        const id = new ObjectId(req.params.id);

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

        const result = collection.deleteOne({_id: id});

        res.status(200).json({ message: 'New Category has been removed'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
