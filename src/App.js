import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import CreateUser from './CreateUser';
import './App.css';
import BluetoothForm from './Bluetooth';


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
