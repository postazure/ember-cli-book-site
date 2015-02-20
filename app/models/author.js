import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  bio: DS.attr('string'),
  // books: DS.hasMany('book', {async: true})
  books: DS.hasMany('book')
});

