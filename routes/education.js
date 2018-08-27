var express = require('express');
var router = express.Router();
var educationController = require('../controllers/educationController');

router.get('', educationController.index);

module.exports = router;