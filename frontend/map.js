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
            let object = data[i];
            let id = parseInt(object.id);
            let lat = parseFloat(object.lat);
            let lon = parseFloat(object.lon);

            let popupContent = `<span style="font-weight: bold; font-size: larger;">${object.name}</span>
                                <img style="display: inline-block; width: 100%;" src="./images/${id}.jpg">
                                <span>Vrsta: <strong>${object.type_description}</strong></span><br>
                                <span>Stanje: <strong>${object.status_description}</strong></span><br>
                                <span>Spletna stran: <a target="_blank" href="${object.website}">kliknite tukaj</a></span>`
            
            if (object.type_id === 0) {
                L.marker([lat, lon], {icon: apartmentIcon}).bindPopup(popupContent, {maxWidth: 300, minWidth: 300}).addTo(map);
            } else {
                L.marker([lat, lon], {icon: houseIcon}).bindPopup(popupContent, {maxWidth: 300, minWidth: 300}).addTo(map);
            }
        }
    });
}