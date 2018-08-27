var vm = new Vue({
	el: '#app',
	data: {
		showPageBlocker: true, // during development
		contactName: '',
		contactEmail: '',
		contactPhone: '',
		contactMessage: ''
	},
	mounted: function() {
		console.log(`Vue mounted`);
	},
	methods: {
		isActive: function(text, elementId) {
			return (text !== '');
		},
		checkPasscode(event) {
			if (event.target.value === '2727') {
				this.showPageBlocker = false;
			}
		}
	}
});
