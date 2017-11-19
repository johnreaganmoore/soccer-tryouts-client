import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('team', params.id);
  },

  actions: {

    updateTeam(teamObject) {

      var self = this;
      const team = this.modelFor(this.routeName)
      let league = this.store.findRecord('league', teamObject.league).then(function(league) {

        team.setProperties({
          league: league,
          name: teamObject.name,
          logo: teamObject.logo,
          website: teamObject.website,
          address_1: teamObject.address_1,
          address_2: teamObject.address_2,
          locality: teamObject.locality,
          region: teamObject.region,
          zip: teamObject.zip
        });

        team.save().then(function() {
          self.transitionTo('teams');
        }).catch(function(reason) {
          console.log(reason)
        });

      });
    },

    delete(team) {

      console.log(team)

      this.store.findRecord('team', team.id, { backgroundReload: false }).then(function(team) {
        team.destroyRecord();
      });
    }
  }
});
