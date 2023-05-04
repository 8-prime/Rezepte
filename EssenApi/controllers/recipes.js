const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    console.log("Hi");
    try {
        const mongoPassword = process.env['MONGO_DB_PASSWORD'] ?? "";
        const mongoUser = process.env['MONGO_DB_USER'] ?? "";
        console.log(mongoPassword);
        const uri = `mongodb+srv://${mongoUser}:${this.mongoPassword}@recipecluster.gmul1mc.mongodb.net/?retryWrites=true&w=majority`;

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        console.log("client created");

        const db = client.db('recipe');

        console.log("got db");

        const collection = db.collection('recipe');

        console.log("got collection");

        const cursor = collection.find();

        console.log("got cursor");

        const recipes = await cursor.toArray();

        console.log("got recipes");

        client.close();


        const result = recipes.map(recipeJson => {
            const recipe = new Recipe();
            recipe.id = recipeJson._id;
            recipe.name = recipeJson.name;
            recipe.ingredients = recipeJson.ingredients;
            recipe.instructions = recipeJson.instructions;
            return recipe;
        });
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
