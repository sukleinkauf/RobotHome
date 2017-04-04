function ajax(){
	
}

function actionClick(){
	$('.button').click(function(){
		$(this).toggleClass('active');
	});
}

$(document).ready(function(){
	actionClick();
});