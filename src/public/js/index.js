var vm = new Vue({
	el: '#app',
	data: {
		showPageBlocker: false, // during development
		contactName: '',
		contactEmail: '',
		contactPhone: '',
		contactMessage: ''
	},
	mounted: function() { },
	methods: {
		isActive: function(text, elementId) {
			return (text !== '');
		},
		checkPasscode(event) {
			if (event.target.value === '2727') {
				this.showPageBlocker = false;
			}
		},
		openMenu(event) {
			this.toggleMenu(true, event)
		},
		closeMenu(event) {
			this.toggleMenu(false, event)
		},
		toggleMenu(showMenu, event) {
			event.preventDefault()
			let menu = this.$refs.mainMenu

			if (showMenu) {
				menu.setAttribute('aria-hidden', false)
				menu.setAttribute('aria-expanded', true)
			} else {
				menu.setAttribute('aria-hidden', true)
				menu.setAttribute('aria-expanded', false)
			}
		}
	}
});
