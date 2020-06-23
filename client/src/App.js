import React from 'react';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import RecipeEdit from './components/RecipeEdit'
import './App.css';
import CategoryPage from './components/CategoryPage';
import SubcategoryPage from './components/SubcategoryPage';
import RecipeDetail from './components/RecipeDetail'
function App() {
 return (
  <div className="app">

   <Switch >
    <Route path='/' component={Home} />
    <Route path='/:id' exact component={RecipeDetail} />
    <Route exact path="/:id/edit" component={RecipeEdit} />
    <Route exact path='/category/:category'>
     <CategoryPage />
    </Route>
    <Route exact path="/category/:category/:subcategory">
     <SubcategoryPage />
    </Route>
   </Switch>
  </div>


 );
}

export default App;
