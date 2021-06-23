import React from 'react';
import { useEffect, useState } from 'react';
import { recipeSearch } from './data';
import NavBar from './Components/NavBar';
import FavRecipe from './pages/FavRecipe';
import LandingPage from './pages/LandingPage';
import SearchResults from './pages/SearchResults';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProvider } from './contexts/context';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <AppProvider>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/FavRecipe" component={FavRecipe} />
            <Route path="/SearchResults" component={SearchResults} />
          </Switch>
        </AppProvider>
      </div>
    </Router>
  );
}

export default App;
