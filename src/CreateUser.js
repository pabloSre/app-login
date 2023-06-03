import React, { useState } from 'react';
import { GrMail } from 'react-icons/gr';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import './CreateUser.css';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, setSignIn] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const sendSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/users', { email, password, name });
      console.log('Sign response:', response.data);
      setSignIn(true);
    } catch (error) {
      console.error('Error during login:', error);

      setErrorEmail('This email already exists');
      setErrorPassword('Minimum 8 characters');
    }
  };
  

  if (signIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Container-form">
      <form onSubmit={sendSubmit} className="Form-create-user">
        <h2 className="Title-create-user">SIGN UP</h2>
        <label className="Label-name-create">
          <BsFillPersonLinesFill />
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="Input-name-create"
          />
        </label>
        <br />
        <label className="Label-email-create">
          <GrMail />
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="Input-email-create"
          />
        </label>
        
        <br />
        <label className="Label-password-create">
          <RiLockPasswordFill />
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="Input-password-create"
          />
        </label>
        
        <br />
        <button type="submit" className="Button-register">
          CHECK IN
        </button>
        <p className="Link-login">
          Do you already have an account? <Link to="/" className="Link-log">Log in</Link>
        </p>
        <p className="Error-message">{errorEmail}</p>
        <p className="Error-message">{errorPassword}</p>
      </form>
    </div>
  );
}

export default CreateUser;
