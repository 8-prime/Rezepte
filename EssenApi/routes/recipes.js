const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipes');

router.use(express.json());

// Get all recipes
router.get('/', recipeController.getAllRecipes);


router.post('/newRecipe', recipeController.addNewRecipe);



module.exports = router;
