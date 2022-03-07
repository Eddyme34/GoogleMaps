
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const silo = { lat: 38.5389171, lng: -121.7522203 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: silo,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: silo,
    map: map,
  });
}
