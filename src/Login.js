import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr';
import { RiLockPasswordFill } from 'react-icons/ri';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/auth/login', { email, password });
      console.log('Login response:', response.data);
      setLoggedIn(true);
    } catch (error) {
      console.error('Error during login:', error);
      setError({
        message:'Invalid email or password.'});
    }
  };

  if (loggedIn) {
    return <Redirect to="/bluetooth" />;
  }

  return (
    <div className='Container-form-login'>
      <form className='Form-login' onSubmit={handleSubmit}>
        <span className='Icon-person'>
          <BsPersonCircle className='Icon-person-svg' />
        </span>
        <h2 className='Title-login'>LOGIN</h2>

        <label className='Label-user-login'>
          <GrMail />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className='Input-user-name'
          />
        </label>
        <br />
        <label className='Label-password-login'>
          <RiLockPasswordFill />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className='Input-password'
          />
        </label>


        <button 
        type="submit" 
        className='Button-sesion'>LOG IN</button>
        <p className='Link-register'>¿You do not have an account? <Link to="/register" className='Link-register-link'>Sign Up</Link></p>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  )
}

export default Login;