import Ember from 'ember';

export default Ember.Controller.extend({

		casinoName:"",
		location:"",
		date:"mm/dd/yyyy",
		changeInMoney:"",

		actions: {
			
			publish() {
				const casinoName = this.get('casinoName');
				const location = this.get('location');
				const date = this.get('date');
				const changeInMoney = this.get('changeInMoney');

				// console.log(casinoName);
				// console.log(location);
				// console.log(new Date(date));
				// console.log(changeInMoney);

				var newOuting = this.store.createRecord('outing', {
					casinoName:casinoName, 
					location:location, 
					date:new Date(date), 
					changeInMoney:changeInMoney
				});
			
				newOuting.save();
			
				}
			}

});
