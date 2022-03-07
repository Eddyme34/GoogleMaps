
// Initialize and add the map
function initMap() {
  const silo = { lat: 38.5389171, lng: -121.7522203 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: silo,
  });
  const locations = getLocations();
  addMarkers(locations, map);
}

function getLocations() {
  return [
    {
      position: new google.maps.LatLng(38.5389171, -121.7522203),
      type: "trash"
    },
    {
      position: new google.maps.LatLng(38.5389181, -121.7522253),
      type: "recycle"
    },
    {
      position: new google.maps.LatLng(38.5389271, -121.7522103),
      type: "compost"
    },
  ]
}

function addMarkers(locations, map) {
  for (const location of locations) {
    new google.maps.Marker({
      position: location.position,
      map: map
    })
  }
}
