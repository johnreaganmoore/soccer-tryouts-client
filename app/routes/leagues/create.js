import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('league', {});
  },

  actions: {
    createLeague(leagueObject) {

      var self = this;
      let newLeague = self.store.createRecord('league', leagueObject)

      newLeague.save().then(function() {
        self.transitionTo('leagues');
      }).catch(function(reason) {
        console.log(reason)
      });

    }
  }
});
