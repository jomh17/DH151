
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
function mapGeoJSON(){

	// create the layer and add to map
	geojson_layer = L.geoJson(geojson_data, {
		style: getStyle //call a function to style each feature
	}).addTo(map);

	// fit to bounds
	map.fitBounds(geojson_layer.getBounds())
}

// style each feature
function getStyle(feature){
	return {
		stroke: true,
		color: 'white',
		weight: 1,
		fill: true,
		fillColor: getColor(feature.properties['pop_est']),
		fillOpacity: 0.8
	}
}

// return the color for each feature
function getColor(d) {

	return d > 1000000000 ? '#800026' :
		   d > 500000000  ? '#BD0026' :
		   d > 200000000  ? '#E31A1C' :
		   d > 100000000  ? '#FC4E2A' :
		   d > 50000000   ? '#FD8D3C' :
		   d > 20000000   ? '#FEB24C' :
		   d > 10000000   ? '#FED976' :
					  '#FFEDA0';
}