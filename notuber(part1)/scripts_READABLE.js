function initMap() {
  const _mXfkjrFw = { lat: 42.3453, lng: -71.0464 };
  const _nZXB8ZHz = { lat: 42.3662, lng: -71.0621 };
  const _Tkwu74WC = { lat: 42.3603, lng: -71.0547 };
  const _5KWpnAJN = { lat: 42.3472, lng: -71.0802 };
  const _uf5ZrXYw = { lat: 42.3663, lng: -71.0544 };
  const _VMerzMH8 = { lat: 42.3542, lng: -71.0704 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.352271, lng: -71.05524200000001 },
    zoom: 14,
  });
  const icon = 'car.png';
  const marker_mXfkjrFw = new google.maps.Marker({
    position: _mXfkjrFw,
    map: map,
    icon: icon
  });
  const marker_nZXB8ZHz = new google.maps.Marker({
    position: _nZXB8ZHz,
    map: map,
    icon: icon
  });
  const marker_Tkwu74WC = new google.maps.Marker({
    position: _Tkwu74WC,
    map: map,
    icon: icon
  });
  const marker_5KWpnAJN = new google.maps.Marker({
    position: _5KWpnAJN,
    map: map,
    icon: icon
  });
  const marker_uf5ZrXYw = new google.maps.Marker({
    position: _uf5ZrXYw,
    map: map,
    icon: icon
  });
  const marker_VMerzMH8 = new google.maps.Marker({
    position: _VMerzMH8,
    map: map,
    icon: icon
  });
}
