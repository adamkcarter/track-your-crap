import DS from 'ember-data';

export default DS.Model.extend({
  brand: DS.attr('string'),
  wineType: DS.attr('string'),
  colour: DS.attr('string'),
  price: DS.attr('number'),
  date: DS.attr('date'),
  ratingOutOfTen: DS.attr('number')
});
