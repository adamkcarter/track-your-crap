import Ember from 'ember';

export default Ember.Controller.extend({

		outings: Ember.computed('model.[]',function(){
			return this.get('model');
		}),

		currentCasinoNames: Ember.computed('outings', function(){
			const data = this.get('outings.[]').getEach('casinoName');
			const casinoNames = ['','Enter New Casino'];
			var i = 0;
			for  (i = 0 ;i < data.length; i++) {
				var curName = data[i];
				// if (casinoNames.indexOf(i) > -1)
				if (casinoNames.indexOf(curName)>-1) {
				} 
				else 
				{
					casinoNames.push(curName);
				}
			}
			return casinoNames;
		}),

		id: "",
		casinoName:"",
		location:"",
		date:"mm/dd/yyyy", 
		changeInMoney:"",
		inputCasino: false,
		editMode: false,

		actions: {
			deleteRecord(){
				// debugger;
				let id = this.get('id');
		    console.log(this.store.find('outing', id).toString());
		    this.store.find('outing', id).then(function(id){
		    	id.destroyRecord();
		    });
			
			this.set('editMode', false);

			},

			edit(){
				// debugger;
				this.send('deleteRecord');
				this.send('publish');
			},

			triggerEditMode(outing){
				// debugger;
				this.set('editMode', true);
				this.set('inputCasino', true);

				this.set('casinoName', outing.get('casinoName'));
				this.set('location', outing.get('location'));
				this.set('date', new Date(outing.get('date')));
				this.set('changeInMoney', outing.get('changeInMoney'));
				this.set('id', outing.get('id'));
			},

			selectChange(event){
				if (event.target.value === "Enter New Casino"){
					this.set('inputCasino', true);
				} else {
					this.set('inputCasino', false);
				}
			},

			publish() {
				// debugger;
				let casinoName = "";
				if (this.get('inputCasino')){
					casinoName = this.get('casinoName');					
				} else {
					let selected = Ember.$('#casinoName');
					casinoName = selected[0].options[selected[0].selectedIndex].value;
				}
				
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
