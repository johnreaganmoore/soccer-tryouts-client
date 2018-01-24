import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.store.createRecord('team', {});
    return Ember.RSVP.hash({
      newTryout: this.store.createRecord('tryout', {}),
      teams: this.store.findAll('team')
    });
  },

  setupController(controller, models) {
    controller.set('newTryout', models.newTryout);
    controller.set('teams', models.teams);
    // or, more concisely:
    // controller.setProperties(models);
  },

  actions: {

    createTryout(tryoutObject) {

      var self = this;
      let team = this.store.findRecord('team', tryoutObject.team).then(function(team) {

        tryoutObject.team = team

        let newTryout = self.store.createRecord('tryout', tryoutObject)

        newTryout.save().then(function() {
          self.transitionTo('tryouts');
        }).catch(function(reason) {
          console.log(reason)
        });


      });
    }
  }
});
