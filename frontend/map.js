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

// Icons made by juicy_fish from www.flaticon.com
var MapIcon = L.Icon.extend({
    options: {
        iconSize: [48, 48],
        iconAnchor: [24, 48],
        popupAnchor: [0, -48],
        tooltipAnchor: [0, -48]
    }
});

var houseIcon = new MapIcon({iconUrl: './icons/home.png'});
var apartmentIcon = new MapIcon({iconUrl: './icons/offices.png'});

function populateMarkers() {
    getBuildings().then(data => {
        for (let i = 0; i < data.length; i++) {
            let lat = parseFloat(data[i].lat);
            let lon = parseFloat(data[i].lon);
            let name = data[i].name;
            let type = parseInt(data[i].type);
            if (type === 0) {
                L.marker([lat, lon], {icon: apartmentIcon}).bindPopup(name).addTo(map);
            } else {
                L.marker([lat, lon], {icon: houseIcon}).bindPopup(name).addTo(map);
            }
        }
    });
}