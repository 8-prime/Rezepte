const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const Recipe = require('../models/recipe');
const Category = require('../models/category');
const { createApi } = require('unsplash-js');
const fetch = require('node-fetch');
const { response } = require('express');
global.fetch = fetch;

require('dotenv').config()


// Define the endpoint URL for searching images


exports.getImagesByTerm = async (req, res) => {
    try {
        const term = req.params.id;

        const unsplashAccess = encodeURIComponent(process.env['IMAGE_ACCESS'] ?? "");
        const unsplashSecret = encodeURIComponent(process.env['IMAGE_SECTET'] ?? "");

        const unsplash = createApi({
            accessKey: unsplashAccess,
            secret: unsplashSecret
        });

        unsplash.search.getPhotos({
            query: term,
            page: 1,
            perPage: 1,
        }).then(response => {
            res.status(200).json(response.response.results[0]);
        })


    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};