let x = true;


// Initialize the map with a center and zoom level
var map_init = L.map("map", {
  center: [9.0820, 8.6753],
  zoom: 8,
});



// Add a tile layer from OpenStreetMap
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map_init);

// Add a geocoder control to the map
L.Control.geocoder().addTo(map_init);
