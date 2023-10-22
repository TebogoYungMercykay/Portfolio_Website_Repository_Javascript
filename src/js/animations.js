// * Toddle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

// * Smooth scrolling

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		if ((top >= offset) && (top < (offset + height))) {
			// Active navbar Links
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});

			// Active sections for animation on scroll
			sec.classList.add('show-animate');
		} else { // For an animation that repeats on scroll:
			sec.classList.remove('show-animate');
		}
	});

	// Sticky header
	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 100);

	// Removing navbar and toddle icon onScroll
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');

	// Footer animation on scroll
	let footer = document.querySelector('footer');
	footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

// * Animation Scripting

const backgroundAnimation = document.getElementById('backgroundAnimation');
const numBoxes = 800;

for (let i = 0; i < numBoxes; i++) {
	const colorBoxEffect = document.createElement('div');
	colorBoxEffect.classList.add('colorBoxEffect');
	backgroundAnimation.append(colorBoxEffect)
}