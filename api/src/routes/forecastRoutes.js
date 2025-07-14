const express = require('express');
const router = express.Router();
const forecastController = require('../controllers/forecastController');

router.get('/:insee', forecastController.getForecasts);
// router.get('/:insee', forecastController.getForecast);
// router.get('/cities/:codeInsee/forecast', forecastController.get2DayForecasts);

module.exports = router;
