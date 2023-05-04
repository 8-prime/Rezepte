const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipes');

// Get all recipes
router.get('/', recipeController.getAllRecipes);

module.exports = router;
