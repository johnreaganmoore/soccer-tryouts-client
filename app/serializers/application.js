// import Ember from 'ember';
// import JSONSerializer from 'ember-data/serializers/json';
//
// export default JSONSerializer.extend({
//
//   keyForAttribute(key) {
//     return Ember.String.decamelize(key);
//   }
//
// });

// export default DS.JSONAPISerializer.extend({
//   payloadKeyFromModelName(modelName) {
//     return singularize(capitalize(modelName));
//   }
// });


// app/serializers/application.js
import Ember from 'ember';
import DS from 'ember-data';
var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return underscore(attr);
  },

  keyForRelationship: function(rawKey) {
    return underscore(rawKey);
  }
});
