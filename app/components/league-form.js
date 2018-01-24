import Ember from 'ember';

export default Ember.Component.extend({

  name: "",
  logo: "",
  level: "",
  website: "",
  indoor: "",
  seasonStart: "",
  seasonEnd: "",


  actions: {

    imageUploadComplete: function(details) {
      this.get('league').set('logo', details["fullUrl"])
    },


    submitLeague() {
      const name = this.get('league.name');
      const logo = this.get('league.logo');
      const level = this.get('league.level');
      const website = this.get('league.website');
      const indoor = this.get('league.indoor');
      const seasonStart = this.get('league.seasonStart');
      const seasonEnd = this.get('league.seasonEnd');

      if (name) {

        this.get('formSubmit')({
          name,
          logo,
          level,
          website,
          indoor,
          seasonStart,
          seasonEnd,
        });
      }
    }

  }

});
