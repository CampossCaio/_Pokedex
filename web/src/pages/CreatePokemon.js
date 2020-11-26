import { useState } from 'react';
import '../styles/pages/CreatePokemon.css';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../components/Header';

import api from '../services/api';

export default function CreatePokemon() {

  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [attack, setAttack] = useState();
  const [defense, setDefense] = useState();

  const history = useHistory();

  function handleNavigationToHome() {
    history.push('/');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      avatar_url: avatarUrl,
      attack,
      defense
    }
    
    await api.post('/pokemons', data);
    handleNavigationToHome();
    
  }

  return (
    <>
      <Header contentIcon={<FiChevronLeft />} onClick={handleNavigationToHome} />
      <div className="form-container">
        <h1>Novo Pokemon</h1>
        <form onSubmit={handleSubmit} >
          <input 
            type="text"
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input 
            type="text"
            placeholder="Url da imagem "
            value={avatarUrl}
            onChange={e => setAvatarUrl(e.target.value)}
          />
          <div>
          <input 
            type="text"
            placeholder="Ataque"
            value={attack}
            onChange={e => setAttack(e.target.value)}
          />
          <input 
            type="text"
            placeholder="Defesa"
            value={defense}
            onChange={e => setDefense(e.target.value)}
          />
          </div>
          <button type="submit" >
            Adicionar
          </button>
        </form>
      </div>
    </>
  )
}