$(() => { 
  var map = L.map('map').setView([50.445210, -104.618896], 13)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var marker = L.marker([50.482456, -104.615591]).addTo(map);
  marker.bindPopup(`
  <form id = "point-form" action="/points" method="POST">
   <input
    type="text"
    name="point-name"
    placeholder="Enter a point name"
  />
  <button type="submit">Post</button>
  </form>
  `).openPopup();
  const $marker = $(marker);
  console.log(marker);
  const $pointForm = $('#point-form');
  console.log($pointForm)
  $pointForm.submit(function(event) {
    event.preventDefault();
    console.log(this);
    const $inputField = $(this).children('input');
    console.log($inputField);
    
    console.log("Here is the post");
    const query = $(this).serialize();
    $.post( "/points", query, data => {
      console.log(data);
    })
  })
});