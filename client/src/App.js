import React from 'react';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import Recipedetail from './components/RecipeDetail'
import './App.css';

function App() {
 return (
  <div className="app">

   <Switch >
       <Route exact path='/' component={Home} />
       <Route exact path="/:id" component={Recipedetail} />
   </Switch>
  </div>
 );
}

export default App;
