var vm = new Vue({
	el: '#app',
	data: {
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
			return (text !== '')
		}
	}
});
