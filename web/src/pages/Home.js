import  { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PokemonCard from '../components/PokemonCard';
import SkeletonComponent from '../components/SkeletonComponent';

import api from '../services/api';

import '../styles/pages/home.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  const history = useHistory();

  async function loadPokemons() {
    setIsLoading(true);
    const response = await api.get('pokemons');
    setPokemons(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
   loadPokemons();
  },[]);

  async function handleDelete(id) {
    await api.delete(`pokemons/${id}`);
    const filteredPokemons = pokemons.filter((pokemon => pokemon.id !== id));
    setPokemons(filteredPokemons);
  }

  function handleNavigateToCreatePokemon() {
    history.push('/create-pokemon');
  }

  return (
    <>
      <Header contentText="Adicionar" onClick={handleNavigateToCreatePokemon} />
      <div className="container">
        {
          isLoading
          ? 
            <SkeletonComponent/>
          : <div className="pokemons-container">
            {pokemons.map(pokemon => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                avatar_url={pokemon.avatar_url}
                attack={pokemon.attack}
                defense={pokemon.defense}
                onDelete={handleDelete}
              />
            ))}
        </div>
        }
      </div>
      <Footer />
    </>
  )
}
