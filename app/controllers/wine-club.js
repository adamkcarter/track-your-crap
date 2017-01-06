import Ember from 'ember';

export default Ember.Controller.extend({

	wines: Ember.computed('model.[]',function(){
			return this.get('model');
		}),

	actions:{
		publish(){
			debugger;
			const brand = "duckHead";
			const wineType = "merlot";
			const colour = "red";
			const price = 10.00;
			const date = "1/5/2017";
			const ratingOutOfTen = 2;
			const labelImage = 1;

			var newWine = this.store.createRecord('wines', {
					brand:brand,
					wineType:wineType,
					colour:colour,
					price:price,
					date:date,
					ratingOutOfTen:ratingOutOfTen
				});
			
				newWine.save();
			
		}
	}
});
