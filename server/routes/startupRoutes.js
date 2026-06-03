const express = require('express');
const router = express.Router();
const startupController = require('../controllers/startupController');

router.post('/submit', startupController.submitStartup);
router.get('/:id', startupController.getStartupDetails);

module.exports = router;
