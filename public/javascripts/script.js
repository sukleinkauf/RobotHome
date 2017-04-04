function verifyClass(elem){
	var check = $(elem).hasClass('active');
	if(check){
		window.location.href = 'http://192.168.1.156:3000/off';
	}else{
		window.location.href = 'http://192.168.1.156:3000/on';
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