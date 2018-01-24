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
  league_id: "",

  actions: {

    setLeague: function(selected) {
      this.set('league_id', selected)
    },

    imageUploadComplete: function(details) {
      this.get('team').set('logo', details["fullUrl"])
    },

    submitTeam() {
      const name = this.get('team.name');
      const website = this.get('team.website');
      const logo = this.get('team.logo');
      const address_1 = this.get('team.address_1');
      const address_2 = this.get('team.address_2');
      const locality = this.get('team.locality');
      const region = this.get('team.region');
      const zip = this.get('team.zip');
      const league = this.get('league_id')

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
