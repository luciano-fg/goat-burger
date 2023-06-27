import React from 'react';
import { useState, useEffect } from 'react';
import './carta.css';
import axios from 'axios';
import t11 from '../images/combo.jpg'
import t14 from '../images/T14-15.jpg'
import t16 from '../images/T16-17.jpg'
import t18 from '../images/T18-19.jpg'
import t22 from '../images/T22-23.jpg'
import Seleccion from '../images/worldChampion.png'

function Carta() {

    const [counter, setCounter] = useState(0);
    const [blueValue, setBlueValue] = useState(null);
    const api_dolar = async () => {
        const getBlueValue = await axios.get('https://api.bluelytics.com.ar/v2/latest');
        setBlueValue(getBlueValue.data.blue.value_sell);
    }
    useEffect(() => {
        api_dolar();
    })

    const increment = () => {
        setCounter(counter + 1);
    };
    
    const decrement = () => {
        setCounter(counter - 1);
    };

    const sendEvent = () => {
        counter > 0 ? alert(`Compró ${counter} hamburguesa/s`) : alert('No compro nada')
    }

  return (
    <div className='cartaContainer'>

        <article>
            <img src={t11} alt="" />
            <h2>TEMPORADA 11-12</h2>
            <ul>
                <li>Medallon de pollo 150g</li>
                <li>Lechuga y tomate</li>
                <li>Huevo</li>
                <li>Cebolla caramelizada</li>
            </ul>
            <h3>Precio: {Math.ceil(blueValue / 0.6)}</h3>
            <div>
                <button onClick={decrement}>-</button>
                <p>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={sendEvent}>COMPRAR</button>
        </article>

        <article>
            <img src={t14} alt="" />
            <h2>TEMPORADA 14-15</h2>
            <ul>
                <li>Doble medallon 90g</li>
                <li>Doble cheddar y extra bacon</li>
                <li>Salsa Goat</li>
                <li>Pepinillo</li>
            </ul>
            <h3>Precio: {Math.ceil(blueValue / 0.6)}</h3>
            <div>
                <button onClick={decrement}>-</button>
                <p>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={sendEvent}>COMPRAR</button>
        </article>

        <article>
            <img src={t16} alt="" />
            <h2>TEMPORADA 16-17</h2>
            <ul>
                <li>Doble medallon 90g</li>
                <li>Lechuga y tomate</li>
                <li>Cebolla morada y pepinillos</li>
                <li>Salsa Goat</li>
            </ul>
            <h3>Precio: {Math.ceil(blueValue / 0.6)}</h3>
            <div>
                <button onClick={decrement}>-</button>
                <p>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={sendEvent}>COMPRAR</button>
        </article>

        <article>
            <img src={t18} alt="" />
            <h2>TEMPORADA 18-19</h2>
            <ul>
                <li>Medallon 150g</li>
                <li>Salsa de ajo</li>
                <li>Rucula y tomate</li>
                <li>Extra bacon</li>
            </ul>
            <h3>Precio: {Math.ceil(blueValue / 0.6)}</h3>
            <div>
                <button onClick={decrement}>-</button>
                <p>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={sendEvent}>COMPRAR</button>
        </article>

        <article>
            <img src={t22} alt="" />
            <h2>TEMPORADA 22-23</h2>
            <ul>
                <li>Doble medallon 90g</li>
                <li>Doble cheddar</li>
                <li>Extra bacon y cebolla crispy</li>
                <li>Salsa Goat</li>
            </ul>
            <h3>Precio: {Math.ceil(blueValue / 0.6)}</h3>
            <div>
                <button onClick={decrement}>-</button>
                <p>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={sendEvent}>COMPRAR</button>
        </article>

        <article>
            <img src={Seleccion} alt="" />
            <h2>Messi Seleccion</h2>
            <ul>
                <li>Triple medallon 90g</li>
                <li>Triple cheddar</li>
                <li>Extra bacon y cebolla crispy</li>
                <li>Salsa Goat y pepinillos</li>
            </ul>
            <h3>Precio: {Math.ceil(blueValue / 0.6)}</h3>
            <div>
                <button onClick={decrement}>-</button>
                <p>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={sendEvent}>COMPRAR</button>
        </article>

    </div>
  )
}

export default Carta