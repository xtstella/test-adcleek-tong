const express = require("express");
const cors = require("cors");
const cityRoutes = require("./routes/cityRoutes");
const initDb = require("./initDb");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/cities", cityRoutes);

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
  
// db.init();
// // exemple de requete sql à supprimer
// db.all('select * from city').then((rows) => {
//   console.table(rows);
// });