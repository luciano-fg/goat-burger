import React from 'react';
import './menu.css';
import Messi from '../images/menuMessi.png';

function Menu() {
  return (
    <div className='menuContainer'>
      <img src={Messi} alt="messi" />
    </div>
  )
}

export default Menu