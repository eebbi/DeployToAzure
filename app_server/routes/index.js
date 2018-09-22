const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlStanding = require('../controllers/ctrlStanding'); // ... for the list of World Cup winners (countries)
const ctrlCaptain = require('../controllers/ctrlCaptain'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/standing', ctrlStanding.winnerlist);  // List of World Cup winners (countries)
router.get('/captain', ctrlCaptain.winnerlist);  // List of Golden ball winners (players)

module.exports = router;
