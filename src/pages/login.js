import React from 'react';
import Cabecera from '../componentes/cabecera';
import Iniciar from '../componentes/iniciar';

function Login() {
  return (
    <div>
      <div className='header'>
        <Cabecera titulo="GOAT BURGER" />
      </div>
      <div className='menu'>
        <Iniciar />
      </div>
  </div>
  )
}

export default Login