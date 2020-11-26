const connection = require('../../database/connection');

class PokemonsController {

  async index(request, response ) {
    const pokemons = await connection('pokemons').select();

    setTimeout(() => {
       return response.json(pokemons);
    }, 2000);
  }

  async create(request, response) {
    const { name, avatar_url, attack, defense } = request.body;

     const pokemon = await connection('pokemons').insert({
       name,
       avatar_url,
       attack,
       defense
     });

     return response.json(pokemon);
  }

  async delete(resquest, response ) {
    const { id } = resquest.params;

    const checkIfPokemonExist = await connection('pokemons').where('id', id).select();

    if(checkIfPokemonExist.length < 1) {
      return response.json({ error: "Pokemon does not exist"});
    }

    await connection('pokemons').where('id', id).delete();
    
    return response.status(200).send();
  }
}

module.exports = new PokemonsController();