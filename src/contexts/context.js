import React, { useState, useContext } from 'react';
import { recipeSearch } from '../data';
import {
  fetchSavedRecipes,
  saveToLocalStorage,
} from '../localStorageFunctions';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState();
  const [searchResults, setSearchResults] = useState(recipeSearch.hits);
  const [savedRecipes, setSavedRecipes] = useState(fetchSavedRecipes());

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        savedRecipes,
        setSavedRecipes,
        saveToLocalStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
