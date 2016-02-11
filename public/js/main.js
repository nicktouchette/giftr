$(function() {
  // Home page animation
  // Show first event on home page
  $('.events li').first().css("opacity", 1);

  // Home page animation
  var $events = $('.events li');
  var $currentEvent = $events.first();
  var animationOut = 'fadeOutLeft';
  var animationIn = 'fadeInRight';
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

  // Search Gifts

  function searchGifts (event) {
    event.preventDefault();

    var str = $("#search").find('input').not('[value=undefined]').serialize();
    console.log(str);
    var url = 'http://localhost:3000/gifts?' + str;
    // var gender = $('input[name=gender]:checked', '#search').val();
    // var maxPrice = $('input[name=maxPrice]', '#search').val();
    // var minPrice = $('input[name=minPrice]', '#search').val();
    // var recipientType = $('input[name=recipientType]:checked', '#search').val();
    // var categories = $('input[name="categories"]:checked', '#search').serialize();
    // console.log(categories);
    $.ajax({
      url: url,
      method: "GET"

    }).done(function(data) {
      displayResults(data);
      // console.log(results);
    });
  }

  function displayResults(results) {
    var $container = $(".img_row");
    // console.log(results);
    $container.empty();

    results.forEach(function(result) {
      var id = result._id;
      var imgUrl = result.imageUrl;
      var gift = $("<div class='gift animated bounceInRight'></div>");
      var giftInfo = $("<div class='gift_info'></div>");
      var link = $("<a href='http://localhost:3000/gifts/" + id  + "'></a>");
      var img = "<img src='" + imgUrl + "'>";
      var name = "<p class='gift_name'>" + result.name + "</p>";
      var price = $("<p class='gift_price'>$" + result.price + ".00</p>");
      var favBtn = $("<a class='fav_btn' href='/gifts/" + id + "/favorite'>Add to Favorites</a>")

      $(giftInfo).append(img);

      $(giftInfo).append(name);
      $(giftInfo).append(price);

      $(link).append(giftInfo);

      $(gift).append(link);
      $(gift).append(favBtn);

      console.log(result);
      $container.append(gift);

    })
  }


  $('form#search').submit(searchGifts);
});
