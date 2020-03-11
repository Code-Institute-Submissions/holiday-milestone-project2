var map;

function initMap(){
    // Map options
    var options = {
        center:{lat:36.3932,lng:25.4615},
        zoom: 2,
        mapTypedId: 'terrain'
    };
     
    //  New map
    var map = new
    google.maps.Map(document.getElementById('map'), options);
    
    // Listen for click on map
    google.maps.event.addListener(map, 'click', 
    function(event){
        // Add marker
        addMarker({coords:event.latLng});
    });

    /*
    // Add marker
    var marker = new google.maps.Marker({
          position:{lat:36.3932, lng:-25.4615},
          map: map,
          icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });

    var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
    */

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
