import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.store.createRecord('team', {});
    return Ember.RSVP.hash({
      newTeam: this.store.createRecord('team', {}),
      leagues: this.store.findAll('league')
    });
  },

  setupController(controller, models) {
    controller.set('newTeam', models.newTeam);
    controller.set('leagues', models.leagues);
    // or, more concisely:
    // controller.setProperties(models);
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
