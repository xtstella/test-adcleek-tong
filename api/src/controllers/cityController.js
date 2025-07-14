const db = require("../database");

exports.getCities = async (req, res) => {
  try {
    const cities = await db.all(
      "SELECT insee, name, zipcode, population FROM city"
    );
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cities" });
  }
};

exports.addCity = async (req, res) => {
  try {
    const { insee } = req.body;
    if (!insee)
      return res.status(400).json({ error: "INSEE code is required" });

    // Check if city exists
    const existingCity = await db.get(
      `SELECT * FROM city WHERE insee = '${insee}'`
    );
    if (existingCity) {
      return res.status(409).json({ error: "City already exists" });
    }

    // if city info not existed, fetch the city info from weather API
    const cityData = await weatherService.fetchCityInfo(insee);
    if (!cityData)
      return res.status(404).json({ error: "City not found via API" });

    // Insert city into DB
    await db.run(`
      INSERT INTO city (insee, name, zipcode, population)
      VALUES ('${cityData.insee}', '${cityData.name.replace(/'/g, "''")}', '${
      cityData.zipcode
    }', ${cityData.population})
    `);

    res.status(201).json({ message: "City added", city: cityData });
  } catch (err) {
    res.status(500).json({ error: "Failed to add city" });
  }
};
