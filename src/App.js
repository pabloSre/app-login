import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import CreateUser from './CreateUser';
import './App.css';
import BluetoothForm from './Bluetooth';
import axios from 'axios';
import { useEffect, useState } from 'react';


axios.defaults.baseURL = 'http://localhost:3001'; // Reemplaza con la URL de tu servidor backend

/* const App = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        await axios.get('/'); // Ruta de prueba en tu backend
        setConnected(true);
      } catch (error) {
        console.error('Error connecting to backend:', error);
      }
    };

    checkConnection();
  }, []);

  return (
    <div>
      {connected ? (
        <p>Connected to backend</p>
      ) : (
        <p>Failed to connect to backend</p>
      )}
    </div>
  );
}; */
function App() {
  return (
    <Router>
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={CreateUser} />
        <Route path="/bluetooth" component={BluetoothForm} />
        
      </Switch>

    </>
    </Router>
  );
}

export default App;


