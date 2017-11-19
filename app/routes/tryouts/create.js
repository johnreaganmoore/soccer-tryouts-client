import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('tryout', {});
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
