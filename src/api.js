require('dotenv').config();
const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`;

const fetchMyApi = async (searchQuery) => {
  try {
    const response = await fetch(url + searchQuery);
    const data = await response.json();
    console.log(data.hits);
    return data.hits;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export default fetchMyApi;
