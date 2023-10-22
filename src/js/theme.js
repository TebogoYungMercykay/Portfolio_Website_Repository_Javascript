window.addEventListener('load', function() {
	/****** Light/Dark Theme Toggle with JavaScript ******/
	if (defaultTheme && defaultTheme != "N/A") {
		html.setAttribute('current-theme', defaultTheme);
		if (defaultTheme === 'light') {
			changeThemeTo('light');
			modifyVariables('light');
		} else {
			changeThemeTo('dark');
			modifyVariables('dark');
		}
	} else {
		html.setAttribute('current-theme', 'light');
		changeThemeTo('light');
		modifyVariables('light');
	}
});

// * Light/Dark Theme Toggle with JavaScript

const toggle = document.getElementById('toggleDark');
const html = document.querySelector('html');
const themeStyle = document.querySelector('#theme-style');
const defaultTheme = localStorage.getItem('default_theme');

toggle.addEventListener('click', function() {
	if (html.getAttribute('current-theme') === 'dark') {
		changeThemeTo('light');
		modifyVariables('light');
	} else {
		changeThemeTo('dark');
		modifyVariables('dark');
	}
});

// * This Function Saves the Theme Info for in case of Reload
let changeThemeTo = function(mode) {
	if (mode === 'light') {
		toggle.className = 'bi-moon';
		html.setAttribute('current-theme', 'light');
		localStorage.setItem('default_theme', 'light');
	} else {
		toggle.className = 'bi-brightness-high-fill';
		html.setAttribute('current-theme', 'dark');
		localStorage.setItem('default_theme', 'dark');
	}
}

// * The Function Changes the Variables Globally
let modifyVariables = function(mode) {
	if (mode === 'light') {
		document.documentElement.style.setProperty('--bg-color', 'hsl(0, 0%, 20%)');
		document.documentElement.style.setProperty('--black-color', 'hsl(0, 0%, 10%)');
		document.documentElement.style.setProperty('--second-bg-color', 'hsl(0, 0%, 6%)');
		document.documentElement.style.setProperty('--transparent-bg-color', 'hsla(0, 0%, 0%, 0.3)');
		document.documentElement.style.setProperty('--animation-color', 'hsla(197, 100%, 30%, 0.9)');
		document.documentElement.style.setProperty('--text-color', 'hsla(0, 0%, 85%, 0.99)');
		document.documentElement.style.setProperty('--main-color', 'hsl(197, 100%, 40%)');
		document.documentElement.style.setProperty('--main-box-color', 'hsl(197, 100%, 50%)');
		document.documentElement.style.setProperty('--lang-color', 'hsla(329, 100%, 30%, 0.6)');
		document.documentElement.style.setProperty('--lang-color-yel', 'hsla(70, 100%, 40%, 0.7)');
		document.documentElement.style.setProperty('--grey-color', 'hsla(0, 0%, 40%, 0.89)');
		document.documentElement.style.setProperty('--projects-grey-color', 'hsla(0, 0%, 27%, 0.4)');
	} else {
		document.documentElement.style.setProperty('--bg-color', 'hsl(0, 0%, 95%)');
		document.documentElement.style.setProperty('--black-color', 'hsl(0, 0%, 86%)');
		document.documentElement.style.setProperty('--second-bg-color', 'hsl(175, 57%, 95%)');
		document.documentElement.style.setProperty('--text-color', 'hsla(0, 0%, 8%, 0.99)');
		document.documentElement.style.setProperty('--main-color', 'hsla(197, 98%, 20%, 0.831)');
		document.documentElement.style.setProperty('--main-box-color', 'hsl(197, 100%, 7%)');
		document.documentElement.style.setProperty('--grey-color', 'hsla(0, 0%, 18%, 0.89)');
		document.documentElement.style.setProperty('--projects-grey-color', 'hsla(0, 0%, 67%, 0.209)');
		document.documentElement.style.setProperty('--transparent-bg-color', 'hsla(185, 98%, 21%, 0.33)');
		document.documentElement.style.setProperty('--animation-color', 'hsla(179, 50%, 51%, 0.904)');
		document.documentElement.style.setProperty('--lang-color', 'hsla(329, 100%, 32%, 0.58)');
		document.documentElement.style.setProperty('--lang-color-yel', 'hsla(70, 98%, 16%, 0.62)');
	}
}