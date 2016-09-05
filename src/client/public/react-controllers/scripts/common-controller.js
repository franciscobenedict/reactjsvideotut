console.log('common-controller.js has loaded');
$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
		$('#headerComponent').addClass("sticky");
		$('#app').addClass("sticky-active");
	}
	else{
		$('#headerComponent').removeClass("sticky");
		$('#app').removeClass("sticky-active");
	}
});	