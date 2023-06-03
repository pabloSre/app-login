import React, { useState } from 'react';
import './CreateUser.css';
import axios from 'axios';
import { GrMail } from 'react-icons/gr';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {RiLockPasswordFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function CreateUser() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, setSignIn] = useState(false);
  const [error, setError] = useState('');


/*  const sendSubmit = (e) => {
    e.preventDefault();
    
    
    /* prevent default hace que no se recargue la pagina despues de enviar el form */
    // Aquí realizar alguna acción con los datos del formulario
    // como enviarlos a un servidor*/

  const sendSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/users', { email, password, name });
      console.log('Sign response:', response.data);
      setSignIn(true);
    } catch (error) {
      console.error('Error during login:', error);
      setError({
        messageEmail:'this email already exists',
        messagePass: 'minimum 8 characters'
      });
    }
  };

  if (signIn) {
    return <Redirect to="/login" />;
  }



  return (
<div className='Container-form'>
      
      <form onSubmit={sendSubmit} className='Form-create-user'>
      <h2 className='Title-create-user'>SING UP</h2>
        <label className='Label-name-create'>
        <BsFillPersonLinesFill/>Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='Input-name-create'
          />
        </label>
        <br />
        <label className='Label-email-create'  >
        <GrMail/>Email: 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='Input-email-create'
          />
        </label>
        <br />
        <label className='Label-password-create'>
        <RiLockPasswordFill/>Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='Input-password-create'
          />
        </label>
        <br />
        <button type="submit"
        className='Button-register'
        >CHECK IN
        </button>
        <p className='Link-login'>¿Do you already have an account? <Link to="/" className='Link-log'>Log in</Link></p>
        {error && <p>{error.messageEmail}</p>}
        {error && <p>{error.messagePass}</p>}
      </form>
    </div>
  );
  
}

export default CreateUser;