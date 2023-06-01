import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import CreateUser from './CreateUser';
import './App.css';


function App() {
  return (
    <Router>
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={CreateUser} />
      </Switch>
   
    </>
    </Router>
  );
}

export default App;
