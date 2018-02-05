import Ember from 'ember';

export default Ember.Route.extend({
  // model(params) {
  //   return this.store.findRecord('team', params.id);
  // },

  model(params) {
    // return this.store.createRecord('team', {});
    return Ember.RSVP.hash({
      team: this.store.findRecord('team', params.id),
      leagues: this.store.findAll('league')
    });
  },

  setupController(controller, models) {
    controller.set('team', models.team);
    controller.set('leagues', models.leagues);
    // or, more concisely:
    // controller.setProperties(models);
  },

  actions: {

    updateTeam(teamObject) {

      var self = this;
      const model = this.modelFor(this.routeName)
      const team = model.team
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
          alert(reason)
        });

      });
    },

    delete(team) {
      this.store.findRecord('team', team.id, { backgroundReload: false }).then(function(team) {
        team.destroyRecord();
      });
    }
  }
});
