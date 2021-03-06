var express = require('express');
var router = express.Router();
var Gpio = require('onoff').Gpio;
var led = new Gpio(14, 'out');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { status: '' });
});

router.get('/:status', function(req, res, next) {
	var status = req.params.status;
	if(status=='on'){
		led.writeSync(1);
	}else if(status=='off'){
		led.writeSync(0);
	}

	var GpioStatus = led.readSync();
	
	if(GpioStatus==1){
		res.render('index', {status: 'active'});
	}else{
		res.render('index', {status: ''});
	}
	
});

module.exports = router;