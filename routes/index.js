var express = require('express');
var router = express.Router();
var Gpio = require('onoff').Gpio;
var led = new Gpio(14, 'out');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.params.status);
	res.render('index', { status: '' });
});

router.get('/:status', function(req, res, next) {
	if(status=='on'){
		led.writeSync(1);
	}else if(status=='off'){
		led.writeSync(0);
	}
	res.render('index', { status: status });
});

module.exports = router;
