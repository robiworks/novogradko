var map = L.map('map', {
    center: [46.10, 14.81],
    zoom: 9
});

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

OpenStreetMap_Mapnik.addTo(map);
L.control.scale().addTo(map);

var mapElement = document.getElementById('map');
var navbarElement = document.getElementById('navbar');

function setMapHeight() {
    mapElement.style.height = window.innerHeight - navbarElement.clientHeight + "px";
}

window.addEventListener('resize', setMapHeight());
