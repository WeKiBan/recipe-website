import React from 'react';
import { useEffect, useState } from 'react';
import { recipeSearch } from './data';
import NavBar from './Components/NavBar';
import FavRecipe from './pages/FavRecipe';
import LandingPage from './pages/LandingPage';
import SearchResults from './pages/SearchResults';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/FavRecipe" component={FavRecipe} />
          <Route path="/Search" exact component={SearchResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
