const db = require("../database");
const API_BASE_METEO_CONCEPT = "https://api.meteo-concept.com/api";
const axios = require("axios");

exports.get2DayForecasts = async (req, res) => {
  // I lost a lot of time, this has to be put in the function
  const METEO_API_TOKEN = process.env.METEO_API_TOKEN;
  const insee = req.params.insee;

  try {
    const url = `${API_BASE_METEO_CONCEPT}/forecast/daily?insee=${insee}&token=${METEO_API_TOKEN}`;
    const response = await axios.get(url);
    if (response.data && response.data.forecast) {
      const forecastTwodays = response.data.forecast.slice(0, 2);
      return res.json(forecastTwodays);
    }
  } catch (err) {
    console.error("Failed to fetch forecast", err);
  }
  return null;
};
