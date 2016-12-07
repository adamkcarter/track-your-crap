import Ember from 'ember';
import moment from 'moment';	

export function dateFormatter(params/*, hash*/) {
	return moment(params[0]).format('MMMM Do YYYY');
}

export default Ember.Helper.helper(dateFormatter);
