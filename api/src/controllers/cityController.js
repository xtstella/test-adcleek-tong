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
