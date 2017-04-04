var express = require('express');
var router = express.Router();
var rpio = require('rpio');

rpio.open(12, rpio.OUTPUT, rpio.LOW);
/* GET home page. */
router.get('/:status', function(req, res, next) {
	console.log(req.params.status);
	res.render('index', { title: 'Express' });
});

module.exports = router;
