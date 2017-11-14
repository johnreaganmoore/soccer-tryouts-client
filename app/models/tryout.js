import DS from 'ember-data';

export default DS.Model.extend({
  leagueLogo: DS.attr(),
  teamLogo: DS.attr(),
  teamName: DS.attr(),
  locality: DS.attr(),
  info: DS.attr(),
  endDate: DS.attr(),
  region: DS.attr(),
  fee: DS.attr('number'),
  registration: DS.attr(),
  startDate: DS.attr()
});
