function verifyClass(elem){
	var check = $(elem).hasClass(active);
	console.log(check);
}

function actionClick(){
	$('.button').click(function(){
		$(this).toggleClass('active');
		verifyClass($(this));
	});
}

$(document).ready(function(){
	actionClick();
});