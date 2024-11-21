const express = require('express');
const router = express.Router();
const HomeController = require('../Controllers/HomeController');

router.get('/', HomeController.listPokemones);

router.get('/pokemones/search', HomeController.searchPokemones);

module.exports = router;