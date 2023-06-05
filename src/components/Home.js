import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Home = () => {
  useEffect(() => {
    // Crea el mapa y establece las coordenadas y el nivel de zoom iniciales
    const map = L.map('map').setView([18.855818, -97.090426], 13);

    // Agrega el proveedor de mapa de OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 50,
      attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(map);

    var circle = L.circle([18.870544, -97.101213], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [18.868041, -97.093939],
    [18.874636, -97.076380],
    [18.860241, -97.079530],
]).addTo(map);

circle.bindPopup("Zona con alta contaminacion");
polygon.bindPopup("Zona con baja contaminacion");

    var popup = L.popup()
    .setLatLng([18.858151, -97.101288])
    .setContent("Bienvenido a OriYork")
    .openOn(map);


function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Las coordenadas de este lugar son " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


    return () => {
      // Elimina el mapa al desmontar el componente
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: '40%', height: '300px' }}></div>;
};

export default Home;