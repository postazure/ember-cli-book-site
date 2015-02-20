import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr("string"),
  text: DS.attr('string'),
  rating: DS.attr('number', {defaultValue: 0}),
  // book: DS.belongsTo('book', {async: true})
  book: DS.belongsTo('book')
});
