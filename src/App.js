import React from 'react';
import NavBar from './Components/NavBar';
import SavedRecipes from './pages/SavedRecipes';
import LandingPage from './pages/LandingPage';
import SearchResults from './pages/SearchResults';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProvider } from './contexts/context';

function App() {
  return (
    <Router>
      <div className="app">
        <AppProvider>
          <NavBar />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/SavedRecipes" component={SavedRecipes} />
            <Route path="/SearchResults" component={SearchResults} />
          </Switch>
        </AppProvider>
      </div>
    </Router>
  );
}

export default App;
