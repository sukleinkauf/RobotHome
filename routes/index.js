var express = require('express');
var router = express.Router();
var Gpio = require('onoff').Gpio;
var led = new Gpio(14, 'out');

/* GET home page. */
router.get('/:status', function(req, res, next) {
	console.log(req.params.status);
	res.render('index', { title: 'Express' });
});

module.exports = router;
