function animateLogo(){$svg.drawsvg("animate")}function googleMap(){var e=document.getElementById("google-map"),o={center:new google.maps.LatLng(30.1753905,-97.8408127),scrollwheel:!1,zoom:12,mapTypeId:google.maps.MapTypeId.ROADMAP},e=new google.maps.Map(e,o),a=new google.maps.LatLng(30.1753905,-97.8408127);new google.maps.Marker({position:a,map:e,icon:"img/location-pin.svg"})}WebFont.load({google:{families:["Ubuntu:300,400,500,700","Montserrat:400,700"]}}),$svg=$(".logo > svg").drawsvg({duration:1500,callback:function(){$(".logo").addClass("active")}}),animateLogo(),$(".carousel").swiperight(function(){$(this).carousel("prev")}),$(".carousel").swipeleft(function(){$(this).carousel("next")});var userFeed=new Instafeed({get:"tagged",tagName:"altstadtcitylimits",limit:4,sortBy:"most-recent",clientId:"2f8c1f8533c74a7b9b5b90ada82d9d54",resolution:"low_resolution",template:'<div class="item"><img src={{image}}></div>',after:function(){$(".item").first().addClass("active")}});userFeed.run(),google.maps.event.addDomListener(window,"load",googleMap);