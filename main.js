var map;

function createMap(){
    var options = {
        center: { lat: 0, lng: 130 },
        zoom: 2,
        mapTypedId: 'terrain'
    };

    map = new google.maps.Map(document.getElementById('map'), options);
}