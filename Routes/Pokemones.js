const express = require('express');
const router = express.Router();
const PokemonController = require('../Controllers/PokemonController');

router.get('/', PokemonController.listPokemones);
router.get('/new', PokemonController.newPokemonForm);
router.post('/new', PokemonController.createPokemon);
router.get('/edit/:id', PokemonController.editPokemonForm);
router.post('/edit/:id', PokemonController.updatePokemon);
router.post('/delete/:id', PokemonController.deletePokemon);

router.get('/:id', PokemonController.getPokemonDetails);


router.get('/search', PokemonController.searchPokemones);

module.exports = router;