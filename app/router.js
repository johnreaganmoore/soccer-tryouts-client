import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('tryouts', function() {
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
    this.route('create', { path: '/create' });
  });

  this.route('teams', function() {
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
    this.route('create', { path: '/create' });
  });

  this.route('leagues', function() {
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
    this.route('create', { path: '/create' });
  });

  this.route('about');
});

export default Router;
