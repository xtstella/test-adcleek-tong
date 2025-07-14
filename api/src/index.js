const express = require("express");
const cors = require("cors");
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Initialisation de la base avec les deux tables nécessaires (à garder)
db.init();
// exemple de requete sql à supprimer
db.all('select * from city').then((rows) => {
  console.table(rows);
});