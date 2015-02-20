import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  amazonLink: DS.attr('string'),
  genre: DS.attr('string'),
  year: DS.attr('string'),
  author: DS.belongsTo("author"),
  // author: DS.belongsTo("author", {async: true}),
  reviews: DS.hasMany('review')
  // reviews: DS.hasMany('review', {async: true})
});

