import React from 'react';
import { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RecipeCard from './Components/RecipeCard';
import { recipeSearch } from './data';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';

const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`;

function App() {
  const [data, setData] = useState(recipeSearch);
  const [query, setQuery] = useState('pizza');

  /* useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(url + query);
      response = await response.json(); 
      setData(recipeSearch);
      console.log(recipeSearch);
    }
    fetchMyAPI();
  }, []); */
  return (
    <div>
      <AppBar>
        <ToolBar>
          <img src="https://unsplash.it/40/40" alt="" />
        </ToolBar>
      </AppBar>
      <CssBaseline />
      <Container maxWidth="xl">
        {console.log(data)}
        {data &&
          data.hits.map((item, index) => {
            return <RecipeCard key={index} recipe={item.recipe} />;
          })}
      </Container>
    </div>
  );
}

export default App;
