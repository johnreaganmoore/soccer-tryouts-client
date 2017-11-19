import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('tryout', params.id);
  },

  actions: {

    updateTryout(tryoutObject) {

      var self = this;
      const tryout = this.modelFor(this.routeName)
      let team = this.store.findRecord('team', tryoutObject.team).then(function(team) {

        tryout.setProperties({
          team: team,
          label: tryoutObject.label,
          fee: tryoutObject.fee,
          startDate: tryoutObject.startDate,
          endDate: tryoutObject.endDate,
          locality: tryoutObject.locality,
          region: tryoutObject.region,
          registration: tryoutObject.registration,
          info: tryoutObject.info,
        });

        tryout.save().then(function() {
          self.transitionTo('tryouts');
        }).catch(function(reason) {
          console.log(reason)
        });

      });
    },

    delete(tryout) {

      console.log(tryout)

      this.store.findRecord('tryout', tryout.id, { backgroundReload: false }).then(function(tryout) {
        tryout.destroyRecord();
      });
    }

  }
});
