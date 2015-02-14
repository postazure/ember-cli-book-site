import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('books', function () {
    this.route('book', {path: "/:book_id"});
  });

  this.resource('authors', function() {
    this.route('author', {path: "/:author_id"});
  });
});

export default Router;
