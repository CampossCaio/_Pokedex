import { FiXCircle } from 'react-icons/fi';

import '../styles/components/PokemonCard.css';

export default function PokemonCard({ id, name, avatar_url, attack, defense, onDelete }){
  return (
    <div className="card-container">
      <div className="card-info-top">
        <span>ID: {id}</span>
        <button  
          className="btn-delete"
          onClick={() => onDelete(id) }
        >
          <FiXCircle />
        </button>
      </div>

      <div className="card-info-pokemon">
        <img src={avatar_url} alt={name}/>
      <span>{name}</span>
      </div>

      <div className="card-info-attributes">
        <span className="attack">Att: {attack}</span>
        <span className="defense">Def: {defense}</span>
      </div>
    </div>
  )
}