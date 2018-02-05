import Ember from 'ember';

const google = window.google;

export default Ember.Object.extend({

  init() {
    this.set('geocoder', new google.maps.Geocoder());
  },

  createMap(element, teams) {
    let us_center = {lat: 40.2628241, lng: -102.1233218};
    let map = new google.maps.Map(document.getElementById('team-map'), {zoom: 4, center: us_center   });
    this.pinLocation(teams, map);
    return map;
  },


  pinLocation(teams, map) {

    teams.forEach(function(team){

      let teamName = team.get('name')
      let latitude = team.get('latitude')
      let longitude = team.get('longitude')

      let position = {
        lat: latitude,
        lng: longitude
      };

      new google.maps.Marker({ position, map, title: teamName });
    });

  }

});
