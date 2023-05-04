const express = require('express');
const app = express();
const recipeRoutes = require('./routes/recipes');

// Parse incoming JSON requests
app.use(express.json());

// Use recipe routes
app.use('/recipes', recipeRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
