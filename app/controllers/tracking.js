import Ember from 'ember';

export default Ember.Controller.extend({

		outings: Ember.computed('model.[]',function(){
			return this.get('model');
		}),

		currentCasinoNames: Ember.computed('outings', function(){
			const data = this.get('outings.[]').getEach('casinoName');
			const casinoNames = [];
			var i = 0;
			for  (i = 0 ;i < data.length; i++) {
				var curName = data[i]
				// if (casinoNames.indexOf(i) > -1)
				if (casinoNames.indexOf(curName)>-1) {
				} 
				else 
				{
					casinoNames.push(curName)
				}
			}
			return casinoNames;
		}),

		casinoName:"",
		location:"",
		date:"mm/dd/yyyy", 
		changeInMoney:"",

		actions: {			
			publish() {
				var selected = Ember.$('#casinoName');
				// debugger;
				var casinoName = selected[0].options[selected[0].selectedIndex].value;
				// const casinoName = this.get('casinoName');
				const location = this.get('location');
				const date = new Date(this.get('date'));
				const changeInMoney = this.get('changeInMoney');

				var newOuting = this.store.createRecord('outing', {
					casinoName:casinoName, 
					location:location, 
					date:date, 
					changeInMoney:changeInMoney
				});
			
				newOuting.save();
			
				}
			}

});
