const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipes');

router.use(express.json());

// Get all recipes
router.get('/', recipeController.getAllRecipes);
router.get('/byCategory/:id', recipeController.getRecipesForCategory);
router.get('/byId/:id', recipeController.getRecipeById);

router.post('/newRecipe', recipeController.addNewRecipe);

router.delete('/:id', recipeController.removeRecipeById);

module.exports = router;