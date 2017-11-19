import Ember from 'ember';

export default Ember.Component.extend({

  label: "",
  fee: 0,
  registration: "",
  info: "",
  startDate: "",
  endDate: "",
  locality: "",
  region: "",

  actions: {

    submitTryout() {
      const label = this.get('tryout.label');
      const fee = this.get('tryout.fee');
      const startDate = this.get('tryout.startDate');
      const endDate = this.get('tryout.endDate');
      const locality = this.get('tryout.locality');
      const region = this.get('tryout.region');
      const registration = this.get('tryout.registration');
      const info = this.get('tryout.info');
      const team = this.get('tryout.team_id');

      if (label) {

        this.get('formSubmit')({
          label,
          fee,
          startDate,
          endDate,
          registration,
          info,
          locality,
          region,
          team
        });
      }
    }

  }

});
