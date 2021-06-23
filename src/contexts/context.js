import React, { useState, useContext } from 'react';
import { recipeSearch } from '../data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(recipeSearch.hits);
  const [savedRecipes, setSavedRecipes] = useState([]);

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        savedRecipes,
        setSavedRecipes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
