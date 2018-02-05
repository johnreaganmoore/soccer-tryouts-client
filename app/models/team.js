import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  logo: DS.attr(),
  address_1: DS.attr(),
  address_2: DS.attr(),
  locality: DS.attr(),
  region: DS.attr(),
  zip: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  website: DS.attr(),
  league: DS.belongsTo('league', { inverse: 'teams' }),
  tryouts: DS.hasMany('tryout')
});
