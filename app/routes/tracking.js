import Ember from 'ember';

let tracked_craps = [{
	id: 1,
	casino: 'Hard Rock Hotel',
	location: 'Lake Tahoe',
	date: '08/13/2016',
	change_in_money: 200
},{
	id:2,
	casino:'Lakeside',
	location:'Lake Tahoe',
	date:'10/04/2016',
	change_in_money:-200
},{
	id:3,
	casino:'Hard Rock Hotel',
	location:'Lake Tahoe',
	date:'10/04/2016',
	change_in_money:600
}];

export default Ember.Route.extend({
	model(){
		return tracked_craps;
	}
});
