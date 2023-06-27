import React from 'react';
import './contenido.css';
import t11 from '../images/combo.jpg'
import t14 from '../images/T14-15.jpg'
import t18 from '../images/T18-19.jpg'
import t22 from '../images/T22-23.jpg'
import Seleccion from '../images/worldChampion.png'

function Contenido() {
  return (
    <div className='contenidoContainer'>
      <h1>COMBOS DEL DIA</h1>
      <div>
        <article>
          <img src={t11} alt="combo1" />
          <h2>LUNES</h2>
          <ul>
            <li>TEMPORADA 11-12</li>
            <li>Papas medianas</li>
            <li>Lata Pepsi 354cc</li>
            <li>Precio: $1800</li>
          </ul>
        </article>

        <article>
          <img src={t14} alt="combo2" />
          <h2>MARTES</h2>
          <ul>
            <li>TEMPORADA 14-15</li>
            <li>Papas medianas</li>
            <li>Lata Pepsi 354cc</li>
            <li>Precio: $2000</li>
          </ul>
        </article>

        <article>
          <img src={Seleccion} alt="combo3" />
          <h2>MIERCOLES</h2>
          <ul>
            <li>TEMPORADA 16-17</li>
            <li>Papas medianas</li>
            <li>Lata Pepsi 354cc</li>
            <li>Precio: $2200</li>
          </ul>
        </article>

        <article>
          <img src={t18} alt="combo4" />
          <h2>JUEVES</h2>
          <ul>
            <li>TEMPORADA 18-19</li>
            <li>Papas medianas</li>
            <li>Lata Pepsi 354cc</li>
            <li>Precio: $2100</li>
          </ul>
        </article>

        <article>
          <img src={t22} alt="combo5" />
          <h2>VIERNES</h2>
          <ul>
            <li>BURGER A ELECCION</li>
            <li>Papas medianas</li>
            <li>Lata Pepsi 354cc</li>
            <li>Precio: $2000</li>
          </ul>
        </article>
      </div>

    </div>
  )
}

export default Contenido