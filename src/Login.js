import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <input 
        onSubmit={handleSubmit} 
        type="text" 
        placeholder="Nombre de usuario" 
        value={username} 
        onChange={handleUsernameChange}
        className='Input-user-name'/>
      
      <input 
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={handlePasswordChange}
        className='Input-password'/>
      <button type="submit" className='Button-sesion'>Iniciar sesión</button>
      <p className='Link-register'>¿No tienes una cuenta? <Link to="/register">Registrarse</Link></p>
    </form>
    </div>
  )
}

export default Login;