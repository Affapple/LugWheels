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

// Check if the browser supports the Geolocation API
if (!navigator.geolocation) {
  console.log("Your browser doesn't support geolocation feature!");
} else {
  // Get the current position of the user
  navigator.geolocation.getCurrentPosition(getPosition);
  // Update the position every 5 seconds
  setInterval(() => {
    navigator.geolocation.getCurrentPosition(getPosition);
  }, 5000);

}

var marker, lat, long;

// Callback function to plot the user's position on the map
function getPosition(position) {
  // Get the latitude and   longitude of the user's position
  lat = position.coords.latitude;
  long = position.coords.longitude;

  // If a marker already exists, remove it from the map
  if (marker) {
    map_init.removeLayer(marker);
  }


  // Create a marker at the user's position
  marker = L.marker([lat, long]).bindPopup(
    "This is your location"
  );

  // Add the marker to the map
  var featureGroup = L.featureGroup([marker]).addTo(map_init);

  // Center based on location
  map_init.setView([lat, long]);

  // If it is the first time the user's position is plotted on the map, zoom to fit the marker
  if (x) {
    map_init.fitBounds(featureGroup.getBounds());
  }

  x = false;

  console.log("Your coordinate is: Lat: " + lat + " Long: " + long);


  // Set the destination coordinates
  var destinationLat = 38.76647708368326;
  var destinationLng = -9.099000180025573;

  // Create a routing control with the current position as   // the start point and the destination coordinates as the end point
  L.Routing.control({
    waypoints: [
      L.latLng(lat, long),
      L.latLng(destinationLat, destinationLng),
    ],
    routeWhileDragging: false,
  }).addTo(map_init);


}

