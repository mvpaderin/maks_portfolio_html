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
      marginRight: "0%"
    });
  });
}

//Closing contacts bar
if ($(window).width() > 1900) {
  $('#close').click(function() {
    $('#contactsbar').animate(  {
      marginRight: "-24%"
    });
  });
} else if (($(window).width() < 1900) && ($(window).width() > 1400)) {
  $('#close').click(function(){
    $('#contactsbar').animate({
      marginRight: "-35%"
    });
  });
} else if ($(window).width() < 1020) {
  $('#close').click(function(){
    $('#contactsbar').animate({
      marginRight: "-100%"
    });
  });
} else {
$('#close').click(function(){
  $('#contactsbar').animate({
    marginRight: "-50%"
  });
});
}

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
