import DS from 'ember-data';

export default DS.Model.extend({
  casinoName: DS.attr('string'),
  location: DS.attr('string'),
  date: DS.attr('date'),
  changeInMoney: DS.attr('number')
});
