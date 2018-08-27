var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contactController');

router.get('', contactController.contact_create_get);

router.post('', contactController.contact_create_post);

module.exports = router;