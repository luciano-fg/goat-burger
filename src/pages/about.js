import React from 'react';
import Cabecera from '../componentes/cabecera';
import Pie from '../componentes/pie';
import Nosotros from '../componentes/nosotros';

function About() {
  return (
    <div className='about'>
        <div className='header'>
            <Cabecera titulo="GOAT BURGER"/>
        </div>
        <div className='menu'>
            <Nosotros />
        </div>
        <div className='footer'>
            <Pie />
        </div>
    </div>
  )
}

export default About