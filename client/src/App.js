import React from 'react';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import RecipeEdit from './components/RecipeEdit'
import './App.css';

function App() {
 return (
  <div className="app">

   <Switch >
       <Route exact path='/' component={Home} />
       <Route exact path="/:id/edit" component={RecipeEdit} />
   </Switch>
  </div>
 );
}

export default App;
