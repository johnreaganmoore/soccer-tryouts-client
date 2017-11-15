// import DS from 'ember-data';
//
// export default DS.JSONAPIAdapter.extend({
//   // host: 'https://soccer-tryouts-api.herokuapp.com'
//   host: 'http://localhost:3000'
// });

// import Ember from 'ember';
// import JSONAPIAdapter from 'ember-data/adapters/json-api';
//
// const { String: { pluralize, underscore } } = Ember;
//
// export default JSONAPIAdapter.extend({
//
//   host: 'http://localhost:3000',
//
//   pathForType(type) {
//     return pluralize(underscore(type));
//   }
//
// });


// app/adapters/application.js
import Ember from 'ember';
import DS from 'ember-data';
import ENV from "../config/environment";
const { underscore, pluralize } = Ember.String;

export default  DS.JSONAPIAdapter.extend({
  // namespace: 'api',
  // // if your rails app is on a different port from your ember app
  // // this can be helpful for development.
  // // in production, the host for both rails and ember should be the same.
  // host: ENV.host,

  host: 'http://localhost:3000',

  // allows the multiword paths in urls to be underscored
  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  },

});
