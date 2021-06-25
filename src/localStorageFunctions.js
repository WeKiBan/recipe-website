const LOCAL_STORAGE_KEY = 'savedRecipes';

export const fetchSavedRecipes = () => {
  const savedRecipes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (!savedRecipes) {
    savedRecipes = [];
  }
  return savedRecipes;
};

export const saveToLocalStorage = (recipes) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
};
