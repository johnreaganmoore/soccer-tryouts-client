import Ember from 'ember';

export default Ember.Component.extend({
  maps: Ember.inject.service(),

  didInsertElement() {
    this._super(...arguments);
    let teams = this.get('teams');

    let mapElement = this.get('maps').getMapElement(teams);
    this.$('#team-map').append(mapElement);
  }



  // didRender() {
  //   var us_center = {lat: 40.2628241, lng: -107.5298491};
  //   map = new google.maps.Map(document.getElementById('team-map'), {
  //     zoom: 4,
  //     center: us_center
  //   });
  //
  //   var teams = this.store.findAll('team')
  //
  //   teams.forEach(function(team){
  //     var location = {
  //       lat: team.latitude,
  //       lng: team.longitude
  //     }
  //
  //     var marker = new google.maps.Marker({
  //       position: location,
  //       map: map
  //     });
  //   });
  // },

  // setupMap: function() {
  //
  //   var map;
  //   function initMap() {
  //     var us_center = {lat: 40.2628241, lng: -107.5298491};
  //     map = new google.maps.Map(document.getElementById('team-map'), {
  //       zoom: 4,
  //       center: us_center
  //     });
  //
  //     var teams = this.store.findAll('team')
  //
  //     teams.forEach(function(team){
  //       var location = {
  //         lat: team.latitude,
  //         lng: team.longitude
  //       }
  //
  //       var marker = new google.maps.Marker({
  //         position: location,
  //         map: map
  //       });
  //     });
  //
  //   }
  // }

});
