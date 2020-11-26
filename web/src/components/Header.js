import React from 'react';

import logo from '../assets/logo.png';
import '../styles/components/Header.css';

export default function Header({ onClick, contentText, contentIcon , ...rest }) {
  return (
    <header>
      <img src={logo} alt="pokedex"/>
      <button {...rest} onClick={() => onClick()} className={contentIcon && 'isIcon'}>
        {contentIcon
          ? contentIcon
          : contentText
        } 
      </button>
   </header>
  )
}