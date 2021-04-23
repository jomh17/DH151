// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;
// path to csv data
let path = "data/caribu.csv";
// global variables
let markers = L.featureGroup();



var orangeIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
  });
  






// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

// initialize
$( document ).ready(function() {
	createMap(lat,lon,zl);
	readCSV(path);
});

// function to read csv data
function readCSV(path){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			
			// map the data
			mapCSV(data);

		}
	});
}


function mapCSV(data){
	
	// loop through each entry
	data.data.forEach(function(item,index){
		// create marker
		let marker = L.marker([item.latitude,item.longitude],{icon: orangeIcon})

		// add marker to featuregroup
		markers.addLayer(marker)
		
	})

	// add featuregroup to map
	markers.addTo(map)

	// fit markers to map
	map.fitBounds(markers.getBounds())
}

//Create Ute polygon
var polygon = L.polygon([
	[40.760137273238215, -111.46583288226628],
	[38.63644980131417, -112.43751960683204],
	[35.72989817950143, -111.23739988743795],
	[36.23471513254453, -104.77956909241148],
	[38.23860971000406, -103.36989111690026],
	[40.65280539639901, -104.07188492293405]
	]).addTo(map);

polygon.bindPopup("Núu-agha-tʉvʉ-pʉ̱  (Ute) Lands");
polygon.setStyle({fillColor: '#ffff1f'});
