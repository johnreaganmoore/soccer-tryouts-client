import Ember from 'ember';

export default Ember.Component.extend({

  name: "",
  website: "",
  logo: "",
  address_1: "",
  address_2: "",
  locality: "",
  region: "",
  zip: "",

  actions: {

    submitTeam() {
      const name = this.get('team.name');
      const website = this.get('team.website');
      const logo = this.get('team.logo');
      const address_1 = this.get('team.address_1');
      const address_2 = this.get('team.address_2');
      const locality = this.get('team.locality');
      const region = this.get('team.region');
      const zip = this.get('team.zip');
      const league = this.get('team.league_id');

      if (name) {

        this.get('formSubmit')({
          name,
          logo,
          address_1,
          address_2,
          website,
          zip,
          locality,
          region,
          league
        });
      }
    }

  }

});
