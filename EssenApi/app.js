const express = require('express');
const app = express();
const recipeRoutes = require('./routes/recipes');
const categoryRoutes = require('./routes/categories');

// Parse incoming JSON requests
app.use(express.json());

// Use recipe routes
app.use('/recipes', recipeRoutes);
app.use('/categories', categoryRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
