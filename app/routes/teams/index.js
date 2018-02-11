import Ember from 'ember';

export default Ember.Route.extend({

    model() {
      return Ember.RSVP.hash({
        teams: this.store.findAll('team'),
        leagues: this.store.findAll('league')
      });
    },

    setupController: function(controller, models) {
      controller.setProperties({
        teams: models.teams,
        leagues: models.leagues,
        lat: 40.2628241,
        lng: -107.5298491,
        zoom: 4
      });
    }

});
