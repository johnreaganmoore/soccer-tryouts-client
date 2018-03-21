import Ember from 'ember';

const google = window.google;

export default Ember.Object.extend({

  init() {
    this.set('geocoder', new google.maps.Geocoder());
  },

  createMap(element, teams) {

    let styleObject =
[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#f3f5e3"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#5e7da2"
      },
      {
        "weight": 4
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eef5f1"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#8ea27b"
      },
      {
        "saturation": -20
      },
      {
        "lightness": 40
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a0cfd3"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]


    let us_center = {lat: 40.2628241, lng: -102.1233218};
    let map = new google.maps.Map(document.getElementById('team-map'), {
      zoom: 4,
      center: us_center,
      styles: styleObject
    });

    console.log(teams)

    this.pinLocation(teams, map);
    return map;
  },


  pinLocation(teams, map) {

    teams.forEach(function(team){

      let teamName = team.get('name')
      let teamId = team.get('id')
      let teamLogo = team.get('logo')
      let latitude = team.get('latitude')
      let longitude = team.get('longitude')

      let teamAddress1 = team.get('address_1')
      let teamAddress2 = team.get('address_2')

      let locality = team.get('locality')
      let region = team.get('region')
      let zip = team.get('zip')
      let website = team.get('website')
      let league = team.get('league')

      let leagueIsPro = league.get('isPro');
      let leagueLevel = league.get('level');

      var address2line = '';
      var levelLine = '';

      console.log(league)
      console.log(leagueLevel)
      console.log(leagueIsPro)

      if (leagueIsPro) {
        levelLine = '💵 &nbsp;&nbsp;'+ leagueLevel;
      } else {
        levelLine = '❤️ &nbsp;&nbsp;'+ leagueLevel;
      }


      if (teamAddress2 !== null && typeof(teamAddress2) !== 'undefined' && teamAddress2 !== '' ) {
        address2line =  '<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' + teamAddress2 + '</div>';
      }


      var leagueId = 'none';

      if (league.get('id')) {
        leagueId = league.get('id')
      }

      let position = {
        lat: latitude,
        lng: longitude
      };

      var icons = {
        1: {
          icon: "assets/markers/MLS-marker.png"
        },
        2: {
          icon: "assets/markers/USL-marker.png"
        },
        6: {
          icon: "assets/markers/CPL-marker.png"
        },
        3: {
          icon: "assets/markers/NPSL-marker.png"
        },
        5: {
          icon: "assets/markers/UPSL-marker.png"
        },
        4: {
          icon: "assets/markers/PDL-marker.png"
        },
        none: {
          icon: "assets/markers/stuckin-marker.png"
        }
      };

      var icon = icons[leagueId].icon;

      var marker = new google.maps.Marker({ position, map, title: teamName, icon: icon });

      var contentString =
          '<div class="map-team">'+
            // '<div class="map-team-logo">'+
            //   '<img src="'+ teamLogo + '" alt="' + teamName + ' Logo">'+
            // '</div>'+

            '<div class="tryout-content">'+
              '<a href="teams/'+ teamId + '"><h3>' + teamName + '</h3></a>'+
              '<div>'+ levelLine + '</div>'+
              '<div class="dates">'+
                '<div>🗺 &nbsp;&nbsp;' + teamAddress1 + '</div>'+
                address2line +
                '<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' + locality + ', ' + region + ', ' + zip + '</div>'+
              '</div>'+
              '<div class="location">'+
                '🔗 &nbsp;&nbsp;<a href="' + website + '">Website</a>'+
              '</div>'+
            '</div>'+
          '</div>';



      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

    });

  }

});
