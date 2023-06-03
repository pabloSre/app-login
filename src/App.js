import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import CreateUser from './CreateUser';
import BluetoothForm from './Bluetooth';
import axios from 'axios';
import './App.css';


axios.defaults.baseURL = 'http://localhost:3001'; 
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


