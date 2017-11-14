import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  logo: DS.attr(),
  level: DS.attr(),
  website: DS.attr(),
  indoor: DS.attr('boolean'),
  seasonStart: DS.attr(),
  seasonEnd: DS.attr(),
});
