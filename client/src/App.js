import React from 'react';
import Home from './components/Home'
import Login from './components/shared/Login'
import { Route, Switch } from 'react-router-dom'
import RecipeEdit from './components/RecipeEdit'
import RecipeCreate from './components/RecipeCreate';
import './App.css';
import CategoryPage from './components/CategoryPage';
import SubcategoryPage from './components/SubcategoryPage';
import RecipeDetail from './components/RecipeDetail'

function App() {
  return (
    <div className="app">

      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route path="/recipecreate" component={RecipeCreate} />
        <Route exact path='/category/:category'>
          <CategoryPage />
        </Route>
        <Route exact path="/category/:category/:subcategory">
          <SubcategoryPage />
        </Route>
        <Route exact path='/:id' component={RecipeDetail} />
        <Route exact path="/:id/edit" component={RecipeEdit} />
      </Switch>
    </div>


  );
}

export default App;
