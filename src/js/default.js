// Default JavaScript Functions and Initiations

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Ubuntu:300,400,500,700', 'Montserrat:400,700']
  }
});

// Logo Animation
$svg = $('.logo > svg').drawsvg({
  duration: 1500,
  callback: function() {
    $('.logo').addClass('active');
  }
});

function animateLogo() {
  $svg.drawsvg('animate');
}

animateLogo();


// Swipe Controls for Carousel
$('.carousel').swiperight(function() {
  $(this).carousel('prev');
});
$('.carousel').swipeleft(function() {
  $(this).carousel('next');
});

var userFeed = new Instafeed({
  get: 'tagged',
  tagName: 'altstadtcitylimits',
  limit: 4,
  sortBy: 'most-recent',
  clientId: '2f8c1f8533c74a7b9b5b90ada82d9d54',
  resolution: 'low_resolution',
  template: '<div class="item"><img src={{image}}></div>',
  after: function(){
    $('.item').first().addClass('active');
  }
});

userFeed.run();

// Google Map
function googleMap() {
  var map = document.getElementById('google-map');

  var map_options = {
    center: new google.maps.LatLng(30.1753905,-97.8408127),
    scrollwheel: false,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(map, map_options)

  // Map Marker
  var myLatlng = new google.maps.LatLng(30.1753905,-97.8408127);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: 'img/location-pin.svg'
  });
}
google.maps.event.addDomListener(window, 'load', googleMap);