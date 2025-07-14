const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

router.get('/', cityController.getCities);
router.post('/', cityController.addCity);

module.exports = router;