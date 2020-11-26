const { Router } = require('express');
const PokemonsController = require('./app/controllers/PokemonsController');

const routes = new Router();

routes.get('/pokemons', PokemonsController.index);
routes.post('/pokemons', PokemonsController.create);
routes.delete('/pokemons/:id', PokemonsController.delete);

module.exports = routes;