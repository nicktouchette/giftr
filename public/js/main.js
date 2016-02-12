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

  if ($('#gifts_container').length > 0 && localStorage.recentlySearched) {
    var data = JSON.parse(localStorage.recentlySearched);
    displayResults(data);
  }

  var host = window.location.protocol + '//' + window.location.host + '/gifts';
  var url = host + '?';

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
      localStorage.setItem('recentlySearched', JSON.stringify(data));
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
      var favBtn = $("<a class='fav_btn' href='/gifts/" + id + "/favorite'></a>");
      var favBtnFilled = $("<a class='fav_btn_filled' href='/gifts/" + id + "/favorite'></a>");

      $(giftInfo).append(img);

      $(giftInfo).append(name);
      $(giftInfo).append(price);

      $(link).append(giftInfo);

      $(gift).append(link);

      if (result.isFavorite) {
        $(gift).append(favBtnFilled);
      } else {
        $(gift).append(favBtn);
      };

      console.log(result);
      $container.append(gift);
    })
  }


  $('form#search').submit(searchGifts);
});
