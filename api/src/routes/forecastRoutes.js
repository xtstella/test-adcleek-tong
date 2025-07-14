const express = require('express');
const router = express.Router();
const forecastController = require('../controllers/forecastController');

router.get('/:insee', forecastController.getForecasts);

module.exports = router;
