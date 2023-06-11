const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/images');

router.use(express.json());

router.get('/:id', imagesController.getImagesByTerm);

module.exports = router;