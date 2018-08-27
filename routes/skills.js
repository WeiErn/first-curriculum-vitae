var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skillsController');

router.get('', skillsController.index);

module.exports = router;