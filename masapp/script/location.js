var map_init = L.map('map', {
    center: [9.0820, 8.6753],
    zoom: 8
});
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map_init);
L.Control.geocoder().addTo(map_init);
if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!")
} else {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition)
    }, 5000);
};
var marker, lat, long ;

function getPosition(position) {
    // console.log(position)
    lat = position.coords.latitude
    long = position.coords.longitude
    

    if (marker) {
        map_init.removeLayer(marker)
    }


    marker = L.marker([lat, long])
        .bindPopup('This is your location, start running')

    var featureGroup = L.featureGroup([marker]).addTo(map_init)

    map_init.fitBounds(featureGroup.getBounds())

    console.log("Your coordinate is: Lat: " + lat + " Long: " + long)
}