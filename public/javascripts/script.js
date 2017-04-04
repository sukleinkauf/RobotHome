var url = '192.168.1.156:3000/';

function setRouter(elem, action){
	$.post(url+action, function(){
		$(elem).toggleClass('active');
	});
}

function verifyClass(elem){
	var check = $(elem).hasClass('active');
	if(check){
		setRouter(elem, 'on');
	}else{
		setRouter(elem, 'off');
	}
}

function actionClick(){
	$('.button').click(function(){
		verifyClass($(this));
	});
}

$(document).ready(function(){
	actionClick();
});