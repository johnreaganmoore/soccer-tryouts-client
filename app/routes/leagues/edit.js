import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('league', params.id);
  },

  actions: {

    updateLeague(leagueObject) {

      var self = this;
      const league = this.modelFor(this.routeName)

      league.setProperties({
        name: leagueObject.name,
        logo: leagueObject.logo,
        level: leagueObject.level,
        website: leagueObject.website,
        indoor: leagueObject.indoor,
        seasonStart: leagueObject.seasonStart,
        seasonEnd: leagueObject.seasonEnd
      });

      league.save().then(function() {
        self.transitionTo('leagues');
      }).catch(function(reason) {
        console.log(reason)
      });

    },

    delete(league) {
      this.store.findRecord('league', league.id, { backgroundReload: false }).then(function(league) {
        league.destroyRecord();
      });
    }
  }
});
