$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });

if ($(window).width() > 1020) {
  $('#conlink').click(function(){
	$('#contactsbar').animate({
		marginRight: "0%"
	});
});
} else {
  $('#conlink').click(function(){
    $('#contactsbar').animate({
      marginLeft: "0%"
    });
  });
}

if ($(window).width() > 1020) {
  $('#close').click(function(){
  	$('#contactsbar').animate({
  		marginRight: "-25%"
  	});
  });
} else {
  $('#close').click(function(){
    $('#contactsbar').animate({
      marginLeft: "-100%"
    });
  });
}