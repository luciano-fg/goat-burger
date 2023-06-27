import { useState } from 'react';
import './iniciar.css';
import { Link } from 'react-router-dom';

function Iniciar() {

  const[user, setUser] = useState('');
  const[password, setPassword] = useState('');
  
  const handleInputChange = (e) => {
      const {name, value } = e.target;
      if (name === 'user') {
          setUser(value);
      }else if (name === 'password'){
          setPassword(value)
      }

  };

  const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('user', user);
      localStorage.setItem('password', password);
  }

  return (
    <div class="iniciarContainer">
        <div class="formulario">
            <form class="login-form" handleSubmit = {handleSubmit}>
                <input type="text" placeholder="usuario" name="user" autoComplete="off" value={user} onChange={handleInputChange}/>
                <input type="password" placeholder="contraseña" name="password" autoComplete="off" value={password} onChange={handleInputChange}/>
                <button>iniciar sesion</button>
                <p class="message">¿No estas registrado? <Link to="/register">CREAR CUENTA</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Iniciar