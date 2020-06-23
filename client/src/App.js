import React from 'react';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import RecipeEdit from './components/RecipeEdit'
import RecipeCreate from './components/RecipeCreate';
import './App.css';
import CategoryPage from './components/CategoryPage';
import SubcategoryPage from './components/SubcategoryPage';

function App() {
  return (
    <div className="app">

      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/' component={Home} />
        <Route exact path="/:id/edit" component={RecipeEdit} />
        <Route exact path="/recipecreate/:name" exact component={RecipeCreate} />
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
