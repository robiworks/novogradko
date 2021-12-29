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

function setMapHeight() {
    let mapElement = document.getElementById('map');
    let navbarElement = document.getElementById('navbar');
    mapElement.style.height = window.innerHeight - navbarElement.clientHeight + "px";
}

window.addEventListener('resize', setMapHeight);

document.addEventListener('DOMContentLoaded', populateMarkers);
document.addEventListener('DOMContentLoaded', setMapHeight);

function populateMarkers() {
    getBuildings().then(data => {
        for (let i = 0; i < data.length; i++) {
            let lat = parseFloat(data[i].lat);
            let lon = parseFloat(data[i].lon);
            let name = data[i].name;
            L.marker([lat, lon]).bindPopup(name).addTo(map);
        }
    });
}