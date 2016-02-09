$(function() {

  // Show first event on home page
  $('.events li').first().css("opacity", 1);

  // Home page animation
  var $events = $('.events li');
  var $currentEvent = $events.first();
  var animationOut = 'fadeOutUp';
  var animationIn = 'fadeInUp';
  var $lastEvent = $events.last();

  function fadeUpInterval () {
    var animateInterval = setInterval(fadeNext, 3000);
  }

  function fadeNext() {

    $($currentEvent).prev().removeClass(animationIn);
    $($currentEvent).addClass('animated');
    $($currentEvent).addClass(animationOut);
    $($currentEvent).next().addClass('animated');
    $($currentEvent).next().addClass(animationIn);

    if ($currentEvent.text() == $lastEvent.text()) {
      $currentEvent = $events.first();
      $currentEvent.removeClass(animationOut).addClass(animationIn);
    } else {
      $currentEvent = $($currentEvent).next();
      $($currentEvent).removeClass(animationOut);
    }

  }

  fadeUpInterval();

  for(var i = 0; i < $events.length; i++) {
      // $($events[i]).delay(1).show('slow');
    }
});
