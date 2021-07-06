import React, { useState, useContext } from 'react';
import {
  fetchSavedRecipes,
  saveToLocalStorage,
} from '../localStorageFunctions';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState(fetchSavedRecipes());
  const [isLoading, setIsLoading] = useState(false);

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
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
