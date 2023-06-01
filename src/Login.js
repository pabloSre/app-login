import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos de inicio de sesión al servidor
    // Puedes utilizar la información de 'username' y 'password' para realizar la autenticación
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='Container-form-login'>

      <form className='Form-login' >
        <h1 className='Title-login'>Login</h1>

        <label className='Label-user-login' >
          <input 
            onSubmit={handleSubmit} 
            type="text" 
            placeholder="User name" 
            value={username} 
            onChange={handleUsernameChange}
            className='Input-user-name'/>
        </label>

        <label className='Label-password-login' >
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className='Input-password'/>
          </label>


        <button 
        type="submit" 
        className='Button-sesion'>Log in</button>
        <p className='Link-register'>¿You do not have an account? <Link to="/register" className='Link-register-link'>Registrarse</Link></p>
      </form>
    </div>
  )
}

export default Login;