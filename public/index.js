$(() => { 
  var map = L.map('map').setView([50.445210, -104.618896], 13)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var marker = L.marker([50.482456, -104.615591]).addTo(map);
  marker.bindPopup('<p>Here is a popup</p>').openPopup();
  const $marker = $(marker);
  console.log(marker);
});