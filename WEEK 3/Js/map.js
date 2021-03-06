
	let cities = ['Miami','Lake Tahoe','Cancun','Chicago','Washington D.C.']
	let data = [
	{
		title: "Miami",
		url:
		"https://media.timeout.com/images/105695117/750/422/image.jpg",
		description: "I went on a vacation with my family here in the summer of 2018. It was very fun but also very humid.",
		lat: 25.4612,
		lon: -80.1124,
	
	},
	{
		title: "Lake Tahoe",
		url:
		"https://mynews4.com/resources/media/566b3d0a-fd7c-43b3-83f8-e7a96b30e388-medium16x9_TahoeScenic.jpg?1597382754019",
		description: "I love Lake Tahoe! I went to a family wedding here in the summer of 2017. I have been 2 more times since then during the winter to ski!",
		lat: 39.096848,
		lon: -120.032349,
		
	},
	{
		title: "Cancun",
		url:
		"https://k9h2z2w9.stackpathcdn.com/wp-content/uploads/Cancun-Beaches-Aerial-NBS-750x375.jpg",
		description: "I went here on a family vacation in the summer of 2019. We stayed at the most beautiful resort and I surprisingly  did not get sunburnt",
		lat: 21.1619,
		lon: -86.8515,
		
	},
	{
		title: "Chicago",
		url:
		"https://media.cntraveler.com/photos/5f8f09c3a078e9112956774d/16:9/w_1200%2Cc_limit/Chicago-GettyImages-1065188752.jpg",
		description: "I've been here twice! Most recently, I visited some of my friends who go to Loyola this winter.",
		lat: 41.5204,
		lon: -87.3954,
		
	},
	{
		title: "Washington DC",
		url:
			"https://www.telegraph.co.uk/content/dam/travel/Spark/brand-usa-2018/washinton-dc-mall-xlarge.jpg",
		description:
			"I went here on a family vacation the summer of 2009. I saw Michelle and Malia Obama at lunch!",
		lat: 38.5342,
		lon: -77.0211,
		
	},
	];
	
	var greenIcon = new L.Icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
		shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41]
	  });
	  
	  

	var map = L.map('map').setView([0,0], 2);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

let myMarkers= L.featureGroup();


		data.forEach(function(item, index)
		{
			let popup= L.popup( ).setContent ("<h3>" + item.title + "<h3>"+ '<p>'+ item.description+'</p>' + "<br /> <img src= '" + item.url + "' width=300px />");
			let marker= L.marker([item.lat,item.lon],{icon: greenIcon}).bindPopup(popup).openPopup();	

myMarkers.addLayer(marker)

			$(".sidebar").append(`<div class="sidebar-item" 
			onclick="flyToIndex(${index})"> <center>${item.title} </center> </div>`)
			
		})

myMarkers.addTo(map)

let layers= {
"Places!": myMarkers
}

L.control.layers(null,layers).addTo(map)

map.fitBounds(myMarkers.getBounds())

function flyToIndex(index){
 	map.flyTo([data[index].lat, data[index].lon],12)
	myMarkers.getLayers()[index].openPopup()
		}
	