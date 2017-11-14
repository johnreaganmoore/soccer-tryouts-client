import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://soccer-tryouts-api.herokuapp.com'
});
