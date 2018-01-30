import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  logo: DS.attr(),
  level: DS.attr(),
  website: DS.attr(),
  indoor: DS.attr('boolean'),
  seasonStart: DS.attr(),
  seasonEnd: DS.attr(),
  teams: DS.hasMany('team'),
  isPro: Ember.computed('level', function() {
    return this.get('level') == "Professional";
  })
});
