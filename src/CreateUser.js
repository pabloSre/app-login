import React, { useState } from 'react';
import './CreateUser.css';

function CreateUser() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendSubmit = (e) => {
    e.preventDefault();
    
    
    /* prevent default hace que no se recargue la pagina despues de enviar el form */
    // Aquí realizar alguna acción con los datos del formulario
    // como enviarlos a un servidor
  };


  return (
<div className='Container-form'>
      
      <form onSubmit={sendSubmit} className='Form-create-user'>
      <h2 className='Title-create-user'>Create user !</h2>
        <label className='Label-name-create'>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='Input-name-create'
          />
        </label>
        <br />
        <label className='Label-email-create'>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='Input-email-create'
          />
        </label>
        <br />
        <label className='Label-password-create'>
          Password:
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
        >Registrarse
        </button>
      </form>
    </div>
  );
  
}

export default CreateUser;