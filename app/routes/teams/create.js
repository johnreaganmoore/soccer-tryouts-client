import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('team', {});
  },

  actions: {

    createTeam(teamObject) {

      var self = this;
      let league = this.store.findRecord('league', teamObject.league).then(function(league) {

        teamObject.league = league

        let newTeam = self.store.createRecord('team', teamObject)

        newTeam.save().then(function() {
          self.transitionTo('teams');
        }).catch(function(reason) {
          console.log(reason)
        });


      });
    }
  }
});
