import React from 'react'
import './nosotros.css'
import nosotros from '../images/nosotros.png'

function Nosotros() {
  return (
    <div className='nosotrosContainer'>
        <img src={nosotros} alt="" />
        <div>
            <h1>What is love? The Goat Burger</h1>
            <p>Con casi 45 años de experiencia en la producción y comercialización de alfajores y especialidades, nuestros productos se fueron afianzando en el mercado y evolucionamos como empresa, pero conservando la calidad de siempre que nos hizo crecer.</p>
        </div>
    </div>
  )
}

export default Nosotros