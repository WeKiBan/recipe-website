const axios = require('axios');

const handler = async (event) => {
  const { query } = event.queryStringParameters;
  const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
  const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;

  const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${query}`;

  try {
    const { data } = await axios.get(url);
    return { 
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
