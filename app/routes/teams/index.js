import Ember from 'ember';

export default Ember.Route.extend({

    model() {
      return Ember.RSVP.hash({
        teams: this.store.findAll('team')
      });
    },

    setupController: function(controller, models) {
      controller.setProperties({
        teams: models.teams,
        lat: 40.2628241,
        lng: -107.5298491,
        zoom: 4
      });
    }

});
