var express = require('express');
var router = express.Router();
var controllerMain = require('../controllers/main');


router.get('/', controllerMain.index);

module.exports = router;
