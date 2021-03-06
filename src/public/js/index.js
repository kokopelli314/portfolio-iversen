/*
 * Forms and menus are handled by Vue
*/
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
				this.showPageBlocker = false
			}
		},
		openMenu(event) {
			this.toggleMenu(true, event)
		},
		closeMenu(event) {
			this.toggleMenu(false, event)
		},
		toggleMenu(showMenu, event) {
			console.log(`setting menu open to ${showMenu}`)
			event.preventDefault()
			let menu = this.$refs.mainMenu

			if (showMenu) {
				menu.setAttribute('aria-hidden', false)
				menu.setAttribute('aria-expanded', true)
			} else {
				menu.setAttribute('aria-hidden', true)
				menu.setAttribute('aria-expanded', false)
			}
		},
		
	}
});

/*
 * A vanilla scroll listener for items with class '.scroll-to-link' and id in form
 * "destination:{Destination element ID}"
*/
document.addEventListener('click', function(event) {
	if (event.target.matches('.scroll-to-link')) {
		// See if we're scrolling on the current page
		let paths = event.target.id.split(':')
		let elementId = paths[1]
		if (paths[0] === 'destination' && document.getElementById(elementId)) {
			console.log('scrollin ' + elementId)
			scrollIntoView(elementId)
			event.preventDefault()
		}
	}
	console.log(event.target)

	// Ensure the menu is closed after clicking anything
	if (!(event.target.parentElement.matches('.menu-toggle')
		|| event.target.matches('.menu-toggle'))) {
		let menu = document.getElementById('main-menu')
		menu.setAttribute('aria-hidden', true)
		menu.setAttribute('aria-expanded', false)
	}
})

function scrollIntoView(elementId) {
	let scrollOptions = {
		behavior: 'smooth',
		block: 'start'
	}
	document.getElementById(elementId).scrollIntoView(scrollOptions);
}


