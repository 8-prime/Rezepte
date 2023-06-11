const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categories');



router.use(express.json());

// Get all recipes
router.get('/', categoryController.getAllCategories);
router.get('/byId/:id', categoryController.getCategoryById);

router.post('/newCategory', categoryController.addNewCategory);
router.post('/addToCategory/:categoryId/:recipeId', categoryController.addRecipeToCategory);


module.exports = router;
