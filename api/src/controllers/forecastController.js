const db = require("../database");
const axios = require("axios");
const weatherUtils = require("../utils/weatherUtils");
const API_BASE_METEO_CONCEPT = "https://api.meteo-concept.com/api";

function formatDate(dateObj) {
  return dateObj.toISOString().split("T")[0];
}

exports.getForecasts = async (req, res) => {
  const METEO_API_TOKEN = process.env.METEO_API_TOKEN;
  const insee = req.params.insee;

  const today = new Date();
  const nextDays = [...Array(4).keys()].map((offset) => {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    return formatDate(d);
  });

  try {
    // (WIP) Check if forecast exists in DB

    // Fetch from external API
    const url = `${API_BASE_METEO_CONCEPT}/forecast/daily?insee=${insee}&token=${METEO_API_TOKEN}`;
    const response = await axios.get(url);
    const forecasts = response.data.forecast;
    const filteredForecasts = forecasts.filter((f) => {
      const dateOnly = f.datetime.split("T")[0]; // Extract only the date part
      return nextDays.includes(dateOnly);
    });

    // Store in DB
    for (const f of filteredForecasts) {
      const insertSQL = `
        INSERT INTO forecast (date, insee, details)
        VALUES ("${f.datetime}", "${insee}", "${JSON.stringify(f).replace(
        /"/g,
        '""'
      )}")
      `;
      await db.run(insertSQL);
    }
    const result = processForecasts(filteredForecasts);
    res.json(result);
  } catch (err) {
    console.error("Failed to fetch forecast", err);
  }
  return null;
};

function processForecasts(forecastArray) {
  let totalRain = 0;
  let tempMinSum = 0;
  let tempMaxSum = 0;
  let dayCount = forecastArray.length;

  const details = forecastArray.map((f) => {
    totalRain += f.rr10 || 0;
    tempMinSum += f.tmin || 0;
    tempMaxSum += f.tmax || 0;

    return {
      date: f.datetime,
      tmin: f.tmin,
      tmax: f.tmax,
      rain: f.probarain,
      icon: weatherUtils.getIconByCode(f.weather),
    };
  });

  return {
    details,
    stats: {
      rainSum: totalRain,
      avgTmin: (tempMinSum / dayCount).toFixed(1),
      avgTmax: (tempMaxSum / dayCount).toFixed(1),
      dayCount,
    },
  };
}
