const express = require("express");
const cors = require("cors");
const cityRoutes = require("./routes/cityRoutes");
const forecastRoutes = require("./routes/forecastRoutes");
const initDb = require("./initDb");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/cities", cityRoutes);
app.use("/api/forecast", forecastRoutes);

// Initialize DB before starting server
initDb
  .initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize DB", err);
  });
