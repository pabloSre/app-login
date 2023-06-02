import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr';
import {RiLockPasswordFill} from 'react-icons/ri';
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
      <span className='Icon-person'>
      <BsPersonCircle className='Icon-person-svg'/>
      </span>
        <h2 className='Title-login'>LOGIN</h2>

        <label className='Label-user-login' >
        <GrMail/>
          <input 
            onSubmit={handleSubmit} 
            type="text" 
            placeholder="User name" 
            value={username} 
            onChange={handleUsernameChange}
            className='Input-user-name'/>
        </label>
        <br />
        <label className='Label-password-login' >
        <RiLockPasswordFill/>
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className='Input-password'/>
          </label>


        <button 
        type="submit" 
        className='Button-sesion'>LOG IN</button>
        <p className='Link-register'>¿You do not have an account? <Link to="/register" className='Link-register-link'>Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login;