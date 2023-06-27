import React from 'react';
import Cabecera from '../componentes/cabecera';
import Carta from '../componentes/carta';

function Letter() {
  return (
    <div>
      <div className='header'>
        <Cabecera titulo="GOAT BURGER" />
      </div>
      <div>
        <Carta />
      </div>
    </div>
  )
}

export default Letter