import React from 'react';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import CategoryPage from './components/CategoryPage';
import SubcategoryPage from './components/SubcategoryPage';

function App() {
  return (
    <div className="app">

      <Switch >
        <Route exact path='/' component={Home} />
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
