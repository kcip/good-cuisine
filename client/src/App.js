import React from 'react';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
 return (
  <div className="app">

   <Switch >
    <Route exact path='/' component={Home} />
   </Switch>
  </div>
 );
}

export default App;
