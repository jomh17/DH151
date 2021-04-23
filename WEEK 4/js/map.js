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

// add marker to featuregroup
myMarkers.addLayer(marker)


//Create Goshute polygon
var polygon = L.polygon([
	[41.72549565609825, -113.75055818577421],
	[41.01681558776163, -114.54394648763801],
	[38.10834298498779, -114.96395299377926],
	[38.17006686582158, -112.14239248631804],
	[40.87636446002296, -110.73014851250934]
	]).addTo(map);

polygon.bindPopup("Goshute Lands");
polygon.setStyle({fillColor: '#ffb01f'});


let myMarkers = L.featureGroup();

myMarkers.addTo(map)

//define layers
let layers = {
	"My favorite sites": myMarkers
}

//add layer control box
L.control.layers(null,layers).addTo(map)

map.fitBound(myMarkers.getBounds())

function flyToIndex(index){
	map.flyTo([data[index].lat,data[index].lon],15)
	//open the popup
	myMarkers.getLayers()[index].openPopup()
}

