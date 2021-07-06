// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const query = event.queryStringParameters.query;
  const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
  const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;

  const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${query}`;

  try {
    const response = await fetch(url);

    const data = await response.json();
    return data.hits;
  } catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = { handler };
