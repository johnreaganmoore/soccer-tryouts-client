import DS from 'ember-data';

export default DS.Model.extend({
  label: DS.attr(),
  locality: DS.attr(),
  info: DS.attr(),
  endDate: DS.attr(),
  region: DS.attr(),
  fee: DS.attr('number'),
  registration: DS.attr(),
  startDate: DS.attr(),
  team: DS.belongsTo('team', { inverse: 'tryouts' })
});
