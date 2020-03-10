var map;

function initMap(){
    // Map options
    var options = {
        center:{lat:53.5500,lng:-2.4333},
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
        coords:{lat:53.5500, lng:-2.4333},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Lynn MA</h1>'
    },
    {
        coords:{lat:45.4408,lng:-12.3155},
        content: '<h1>Venice</h1>'
    },
    {
        coords:{lat:52.3667,lng:-4.8945}
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