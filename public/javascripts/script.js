var url = 'http://192.168.1.156:3000/';

function setRouter(elem, action){
	console.log(ulr+action);
	$.get(url+action, function(){
		$(elem).toggleClass('active');
		alert('ok');
	});
}

function verifyClass(elem){
	var check = $(elem).hasClass('active');
	if(check){
		setRouter(elem, 'off');
	}else{
		setRouter(elem, 'on');
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