import React from 'react';
import './cabecera.css';
import Logo from '../images/goat.png';
import { Link } from 'react-router-dom';

function Cabecera(props) {
    return (
        <div className="cabeceraContainer">
            <nav className="navbar">
                <img src={Logo} alt="GOAT" />
                <h1>{props.titulo}</h1>
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/about">SOBRE NOSOTROS</Link></li>
                    <li><Link to="/letter">CARTA</Link></li>
                    <li><Link to="/register">REGISTRARSE</Link></li>
                    <li><Link to="/login">INICIAR SESION</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default Cabecera;