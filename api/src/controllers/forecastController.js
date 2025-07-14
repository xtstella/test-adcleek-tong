const db = require("../database");
const axios = require("axios");
const weatherUtils = require("../utils/weatherUtils");
const API_BASE_METEO_CONCEPT = "https://api.meteo-concept.com/api";

exports.getForecasts = async (req, res) => {
  const METEO_API_TOKEN = process.env.METEO_API_TOKEN;
  const insee = req.params.insee;

  try {
    // (WIP) Check if forecast exists in DB

    const url = `${API_BASE_METEO_CONCEPT}/forecast/daily?insee=${insee}&token=${METEO_API_TOKEN}`;
    const response = await axios.get(url);
    if (!response.data || !Array.isArray(response.data.forecast)) {
      return res
        .status(502)
        .json({ error: "Invalid response from weather API" });
    }
    if (response.data && response.data.forecast) {
      const forecasts = response.data.forecast.slice(0, 4);

      // Store in the DB
      for (const day of forecasts) {
        await db.run(
          `INSERT INTO forecast (date, insee, details) VALUES ("${
            day.date
          }", "${insee}", '${JSON.stringify(day)}')`
        );
      }

      return res.json(forecasts);
    }
  } catch (err) {
    console.error("Failed to fetch forecast", err);
  }
  return null;
};
