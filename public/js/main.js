$(function() {
  // Home page animation
  // Show first event on home page
  $('.events li').first().css("opacity", 1);

  // Home page animation
  var $events = $('.events li');
  var $currentEvent = $events.first();
  var animationOut = 'zoomOut';
  var animationIn = 'fadeIn';
  var $lastEvent = $events.last();

  var protocol = window.location.protocol;
  var protocolhost = window.location.host;
  var host = protocol + '//' + protocolhost + '/gifts';
  var url = host + '?';

  // if ($('#gifts_container').length > 0 && localStorage.recentlySearched) {
  //   displayResults(JSON.parse(localStorage.recentlySearched));
  // }

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

  // Search Gifts

  function searchGifts (event) {
    event.preventDefault();

    var str = $("#search").find('input').not('[value=undefined]').serialize();
    console.log(str);

    $.ajax({
      url: url + str,
      method: "GET"

    }).done(function(data) {
      // localStorage.setItem('recentlySearched', JSON.stringify(data));
      displayResults(data);
    });
  }

  function displayResults(results) {
    var $container = $(".gift_results");
    $container.empty();

    results.forEach(function(result) {
      var id = result._id;
      var imgUrl = result.imageUrl;
      var gift = $("<div class='gift animated bounceInUp'></div>");
      var giftInfo = $("<div class='gift_info'></div>");
      var link = $("<a href='" + host + "/" + id  + "'></a>");
      var img = "<img src='" + imgUrl + "'>";
      var name = "<p class='gift_name'>" + result.name + "</p>";
      var price = $("<p class='gift_price'>$" + result.price + ".00</p>");
      var favBtn = $("<button class='fav_btn' action='/gifts/" + id + "/favorite'></button>");
      var favBtnFilled = $("<button class='fav_btn_filled'></button>");

      $(giftInfo).append(img);

      $(giftInfo).append(name);
      $(giftInfo).append(price);

      $(link).append(giftInfo);

      $(gift).append(link);

      if (result.isFavorite) {
        $(gift).append(favBtnFilled);
      } else {
        $(gift).append(favBtn);
      }

      $container.append(gift);
    });
    $('button.fav_btn').click(favorite);
  }

  function favorite (event) {
    event.preventDefault();
    var $self = $(this);
    var action = $(this).attr('action');
    $.ajax({
      url: protocol + '//' + protocolhost + action,
      method: "POST",
      dataType: "json"
    }).done(function(data) {
      $($self).removeClass('fav_btn');
      $($self).addClass('fav_btn_filled');
    });
  }

  $('form#search').submit(searchGifts);
});
