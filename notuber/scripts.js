function initMap() {
  var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
//Success function
function success(pos) {
  var crd = pos.coords;
  const current = { lat: crd.latitude, lng: crd.longitude };
  // console.log('Your current position is:');
  // console.log(`Latitude : ${crd.latitude}`);
  // console.log(`Longitude: ${crd.longitude}`);
  const location_icon = 'marker.ico';
  const car_icon = 'car.png';
  //Creates map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: current,
    zoom: 2.5,
  });

  //Marker for current location + InfoWindow
  const marker_current = new google.maps.Marker({
    position: current,
    map: map,
    icon: location_icon
  });

  //HTTP Request
  var username = 'srm75o31';
  var xhr = new XMLHttpRequest();
  // var url = 'https://jordan-marsh.herokuapp.com/rides';
  var url = 'https://arctic-leaf-60533.herokuapp.com/rides'
  var params = "username="+username+"&lat="+crd.latitude+"&lng="+crd.longitude;
  xhr.open('POST', url, true);



  //Send the proper header information along with the request
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  //Call a function when the state changes
  xhr.onreadystatechange = function() {
    //If function is successful
      if(xhr.readyState == 4 && xhr.status == 200) {
          // console.log(xhr.responseText);
          var jsonData = JSON.parse(xhr.responseText);
          console.log(jsonData);
          //Loop for each car
          var closestDistanceMeters = 999999999999999999;
          var closestCar = "";
          var closestCarLatLng;
          for (count = 0; count < jsonData.length; count++) {
            //Determining distance between user and car

            var LatLng_current = new google.maps.LatLng(parseFloat(crd.latitude), parseFloat(crd.longitude));
            var LatLng_vehicle = new google.maps.LatLng(parseFloat(jsonData[count].lat),parseFloat(jsonData[count].lng));
            var distance = google.maps.geometry.spherical.computeDistanceBetween(LatLng_current,LatLng_vehicle);

            if (distance <= closestDistanceMeters) {
              closestDistanceMeters = distance;
              closestCar = jsonData[count].username;
              closestCarLatLng = LatLng_vehicle;
              // console.log(closestDistanceMeters);
              // console.log(distance);
              // console.log(closestCar);
            }
            //Marker for each car
            var marker_vehicle = new google.maps.Marker({
              position: { lat: jsonData[count].lat , lng: jsonData[count].lng },
              map: map,
              icon: car_icon
            })
      }
      var closestDistanceMiles = closestDistanceMeters / 1609.34;
      var currentContentString = "The closest vehicle to your location is "+closestCar+", which is approximately "+parseInt(closestDistanceMiles)+" miles away.";
      const current_infowindow = new google.maps.InfoWindow({
        content: currentContentString,
      });
      marker_current.addListener("click", () => {
        current_infowindow.open({
          anchor: marker_current,
          map: map,
          shouldFocus: false,
        });
        flightPath.setMap(map);
      });
      //Polyline
      const flightPlanCoordinates = [LatLng_current, closestCarLatLng];
      const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
    }
  }
  xhr.send(params);
}
navigator.geolocation.getCurrentPosition(success, error, options);

}
