import { useState } from 'react'
import './registro.css'
import { Link } from 'react-router-dom';

function Registro() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
      const {name, value } = e.target;
      if (name === 'user') {
        setUser(value);
      } else if (name === 'password') {
        setPassword(value);
      }else if (name === 'email'){
        setEmail(value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', user)
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
  };

  return (
    <div class="registroContainer">
        <form class="formulario" handleSubmit = {handleSubmit}>
            <input type="text" placeholder="usuario" name="user" autoComplete="off" value={user} onChange={handleInputChange}/>
            <input type="password" placeholder="contraseña" name="password" autoComplete="off" value={password} onChange={handleInputChange}/>
            <input type="text" placeholder="email" name="email" autoComplete="off" value={email} onChange={handleInputChange}/>
            <button>crear cuenta</button>
            <p class="message">¿Estas registrado? <Link to="/login">INICIAR SESION</Link></p>
        </form>
    </div>
  )
}

export default Registro