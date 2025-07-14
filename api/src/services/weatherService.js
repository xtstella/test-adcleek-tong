const axios = require("axios");
const API_BASE_METEO_CONCEPT = "https://api.meteo-concept.com/api";

async function fetchCityInfo(insee) {
  try {
    const METEO_API_TOKEN = process.env.METEO_API_TOKEN;
    const url = `${API_BASE_METEO_CONCEPT}/location/cities?insee=${insee}&token=${METEO_API_TOKEN}`;
    const response = await axios.get(url);
    if (
      response.data &&
      response.data.cities &&
      response.data.cities.length > 0
    ) {
      const city = response.data.cities[0];
      return {
        insee: city.insee,
        name: city.name,
        zipcode: city.zipcode,
        population: city.population || 0,
      };
    }
  } catch (err) {
    console.error("Failed to fetch city info", err);
  }
  return null;
}

module.exports = {
  fetchCityInfo,
};
