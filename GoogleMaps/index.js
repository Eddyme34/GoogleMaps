
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
      position: new google.maps.LatLng(38.540766, -121.7555137),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.5407988, -121.7574057),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.5398169, -121.7554852),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.5392791, -121.7551354),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.5377813,-121.7559385),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.5375716,-121.7550581),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.5391493,-121.7534476),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.5392029,-121.7533156),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.5390308,-121.7529773),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.538888,-121.7524699),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.5388421,-121.7525787),
      type: "recycleandtrash"
    },
    {
      position: new google.maps.LatLng(38.5392528, -121.7556151),
      type: "recycle"
    },
    {
      position: new google.maps.LatLng(38.5382356, -121.7560587),
      type: "allthree"
    },
    {
      position: new google.maps.LatLng(38.5374385,-121.7537691),
      type: "allthree"
    },
    {
      position: new google.maps.LatLng(38.538047, -121.753030),
      type: "trash"
    },
    {
      position: new google.maps.LatLng(38.538024, -121.752866),
      type: "allthree"
    }
  ]
}

function addMarkers(locations, map) {
  for (const location of locations) {
    new google.maps.Marker({
      position: location.position,
      map: map,
      icon: "icons/" + location.type + "icon.png"
    })
  }
}
