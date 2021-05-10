
	// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;
let path = '';
// put this in your global variables
let geojsonPath = 'data/world.json';
let geojson_data;
let geojson_layer;


// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}