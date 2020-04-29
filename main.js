// Index animation //

const hero = document.querySelector('.hero');

const slider = document.querySelector('.slider');

const image = new TimelineMax();

image.fromTo(
    hero,
    1, 
    { height: "0%" },
    { height: "80%", ease: Power2.easeInOut }
).fromTo(
    hero, 
    1.2, 
    { width: '100%' }, 
    { width: '80%', ease: Power2.easeInOut }
).fromTo(
    slider, 
    1.2, 
    { x: "-100%" }, 
    { x: '0%' ,ease: Power2.easeInOut }, 
);

// Bottom to top scroll //

function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(top, bottom, comeUp, drop) {
        top /=drop / 2;
        if (top < 1) return comeUp / 2 * top * top + bottom;
        top--;
        return -comeUp / 2 * (top * (top - 2) -1) + bottom;
    }


    requestAnimationFrame(animation);
}

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');

section1.addEventListener('click', function(){
    smoothScroll('.section2', 1000);
});

section2.addEventListener('click', function(){
    smoothScroll('.section1', 1000);
});

// Map Newest //

function initMap(){
    let location = new Object();
    navigator.geolocation.getCurrentPosition(function(pos){
        location.lat = pos.coords.latitude;
        location.long = pos.coords.longitude;
        map = new google.maps.Map(document.getElementById('map'),{
            center: {lat: location.lat, lng: location.long },
            zoom: 15
        });
        getResturants(location);
        getAccomadation(location);
    });
}

function getResturants(location) {
    var rome = new google.maps.LatLng(location.lat.location.long);
    var request = {
        location: rome,
        radius: '1500',
        type: ['resturant', 'accomdation']
    };
    service = new google.maps.places.PlaceService(map);
    service.nearbySerach(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            //console.log(results);
            var place = results[i];
            let price = createPrice(place.price_level);
            let content = `<h3>${place.name}</h3>
            <h4>${place.vicinity}</h4>
            <p>Price: ${price}<br/>
            Rating: $[place.rating}`;

            var marker = new google.maps.Marker({
                positon: place.geometry.location,
                map: map,
                title: place.name
            });

            var infoWindow = new google.maps.InfoWindow({
                content: content
            });

            bindInfoWindow(marker, map , infowindow, content);
            marker.setMap(map);
        }
    }
}

function bindInfoWindow(marker, map, infowindow, html) {
    marker.addListener('click', function() {
        infowindow.setContent(html);
        infowindow.open(map, this);
    });
}

function creatPrice(level){
    if(level != "" && level != null ){
        let out = "";
        for (var x = 0; x < level; x++){
            out += "£";
        }
        return out;
    }else{
        return "?";
    }
}

// Map 

function initMap(){
    // Map options
    var options = {
        center:{lat:36.3932,lng:25.4615},
        zoom: 2,
        mapTypedId: 'terrain',
    };
     
    //  New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Map search
    var input = document.getElementById('search');
    var searchBox = new google.maps.places.SearchBox(input);
    
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];

    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length === 0)
            return;

        markers.forEach(function (m) { m.setMap(null); });
        markers = [];

        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (p) {
            if (!p.geometry)
                return;
            
        markers.push(new google.maps.Marker({
            map: map,
            title: p.name,
            position: p.geometry.location
        }));

        if (p.geometry.viewport)
            bounds.union(p.geometry.viewport);
        else
        });
    });
    
    // Listen for click on map
    google.maps.event.addListener(map, 'click', 
    function(event){
    // Add marker
        addMarker({coords:event.latLng});
    });

    // Array of markers
    var markers = [
        {
        coords:{lat:36.3932, lng:25.4615},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h6>Santorini</h6>'
    },
    {
        coords:{lat:45.4408,lng:12.3155},
        content: '<h6>Venice</h6>'
    },
    {
        coords:{lat:52.3667,lng:4.8945},
        content: '<h6>Amsterdam</h6>'
    },
    {
        coords:{lat:48.8566,lng:2.3522},
        content: '<h6>Paris</h6>'
    },
    {
        coords:{lat:3.2028,lng:73.2207},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h6>Maldives</h6>'
    },
    {
        coords:{lat:12.8797,lng:121.7740},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h6>Philippines</h6>'
    },
    {
        coords:{lat:15.8700,lng:100.9925},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h6>Thailand</h6>'
    },
    {
        coords:{lat:8.3405,lng:115.0920},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h6>Bali</h6>'
    },
    {
        coords:{lat:38.7223,lng:9.1393},
        content: '<h6>Lisbon</h6>'
    },
    {
        coords:{lat:40.4168,lng:3.7038},
        content: '<h6>Madrid</h6>'
    },
    {
        coords:{lat:52.5200,lng:13.4050},
        content: '<h6>Berlin</h6>'
    },
    {
        coords:{lat:13.4125,lng:103.8670},
        content: '<h6>Angkor Wat</h6>'
    },
    {
        coords:{lat:41.9028,lng:12.4964},
        content: '<h6>Rome</h6>'
    }
    ];

    // Loop through markers
    for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map: map,
          //icon: props.iconImage
        });

        // Check for custom icon
        if(props.iconImage){
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });

            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}

// Button

document.querySelector('#redirect')
    .addEventListener('click', () => {
        window.open('https://www.lonelyplanet.com/adventure-tours');
    });