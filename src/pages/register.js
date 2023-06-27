import React from 'react';
import Cabecera from '../componentes/cabecera';
import Registro from '../componentes/registro';

function Register() {
  return (
    <div>
      <div className='header'>
        <Cabecera titulo="GOAT BURGER" />
      </div>
      <div className='menu'>
        <Registro />
      </div>
  </div>
  )
}

export default Register