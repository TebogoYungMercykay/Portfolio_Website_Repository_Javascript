window.addEventListener('load', function() {
	/****** Light/Dark Theme Toggle with JavaScript ******/
	if (defaultTheme && defaultTheme != "N/A") {
		html.setAttribute('current-theme', defaultTheme);
		if (defaultTheme === 'light') {
			modifyVariables('light');
			changeThemeTo('light');
		} else {
			modifyVariables('dark');
			changeThemeTo('dark');
		}
	} else {
		html.setAttribute('current-theme', 'light');
		modifyVariables('light');
		changeThemeTo('light');
	}
});

// * Light/Dark Theme Toggle with JavaScript

const toggle = document.getElementById('toggleDark');
const html = document.querySelector('html');
const themeStyle = document.querySelector('#theme-style');
const defaultTheme = localStorage.getItem('default_theme');

toggle.addEventListener('click', function() {
	if (html.getAttribute('current-theme') === 'dark') {
		modifyVariables('light');
		changeThemeTo('light');
	} else {
		modifyVariables('dark');
		changeThemeTo('dark');
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
		document.documentElement.style.setProperty('--bg-color', 'hsla(0, 0%, 9%, 0.975)');
		document.documentElement.style.setProperty('--black-color', 'hsl(0, 0%, 10%)');
		document.documentElement.style.setProperty('--second-bg-color', 'rgba(81, 81, 81, 0.387)');
		document.documentElement.style.setProperty('--transparent-bg-color', 'hsla(0, 0%, 15%, 0.408)');
		document.documentElement.style.setProperty('--animation-color', 'rgb(138, 138, 138)');
		document.documentElement.style.setProperty('--text-color', 'hsl(0, 0%, 90%)');
		document.documentElement.style.setProperty('--main-color', 'hsl(0, 0%, 75%)');
		document.documentElement.style.setProperty('--main-box-color', 'rgb(107, 107, 107)');
		document.documentElement.style.setProperty('--lang-color', 'rgb(162, 145, 145)');
		document.documentElement.style.setProperty('--lang-color-yel', 'hsla(0, 100%, 98%, 0.408)');
		document.documentElement.style.setProperty('--grey-color', 'rgba(166, 166, 166, 0.815)');
		document.documentElement.style.setProperty('--projects-grey-color', 'rgba(46, 46, 46, 0.568)');
		modifySVGImage(mode);
	} else {
		document.documentElement.style.setProperty('--bg-color', 'hsl(0, 0%, 90%)');
		document.documentElement.style.setProperty('--black-color', 'hsla(0, 0%, 83%, 0.975)');
		document.documentElement.style.setProperty('--second-bg-color', 'hsla(198, 100%, 65%, 0.211)');
		document.documentElement.style.setProperty('--text-color', 'hsla(0, 0%, 8%, 0.844)');
		document.documentElement.style.setProperty('--main-color', 'hsla(180, 100%, 32%, 0.737)');
		document.documentElement.style.setProperty('--main-box-color', 'hsl(180, 100%, 21%)');
		document.documentElement.style.setProperty('--grey-color', 'hsla(0, 0%, 18%, 0.89)');
		document.documentElement.style.setProperty('--projects-grey-color', 'hsla(0, 0%, 67%, 0.209)');
		document.documentElement.style.setProperty('--transparent-bg-color', 'hsla(185, 98%, 21%, 0.178)');
		document.documentElement.style.setProperty('--animation-color', 'hsla(185, 100%, 10%, 0.996)');
		document.documentElement.style.setProperty('--lang-color', 'hsla(329, 100%, 32%, 0.58)');
		document.documentElement.style.setProperty('--lang-color-yel', 'hsla(70, 98%, 16%, 0.62)');
		modifySVGImage(mode);
	}
}

let modifySVGImage = function(mode) {
	if (mode === 'light') {
		var developerImage = document.getElementById("home-developer-img");
		if (developerImage) {
			developerImage.style.filter = "grayscale(70%)";
		} else {
			console.log("Image not Found!");
		}
	} else {
		var developerImage = document.getElementById("home-developer-img");
		if (developerImage) {
			developerImage.style.filter = "none";
		} else {
			console.log("Image not Found!");
		}
	}
}

let modifyRawSVGImage = function(mode) {
	if (mode === 'light') {
		var svgObject = document.getElementById("home-developer-img");
		// Get the SVG document
		var svgDocument = svgObject.contentDocument;
		// Remove the filter by setting the style.filter property to an empty string
		var svgImage = svgDocument.querySelector("image");
		svgImage.style.filter = "";
	} else {
		var svgObject = document.getElementById("home-developer-img");
		// Get the SVG document
		var svgDocument = svgObject.contentDocument;
		// Apply the grayscale filter for 'dark' mode
		var svgImage = svgDocument.querySelector("image");
		svgImage.style.filter = "url(#grayscale-filter)";
	}
}

let defineGreyScale = function() {
	// Get a reference to the <object> element
	var svgObject = document.getElementById("home-developer-img");
	// Get the SVG document
	var svgDocument = svgObject.contentDocument;

	// Define a filter element for grayscale
	var filter = svgDocument.createElementNS("http://www.w3.org/2000/svg", "filter");
	filter.setAttribute("id", "grayscale-filter");
	filter.innerHTML = `
	  <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0
										  0.3333 0.3333 0.3333 0 0
										  0.3333 0.3333 0.3333 0 0
										  0      0      0      1 0"/>
	`;
	// Append the filter to the SVG document
	svgDocument.querySelector("defs").appendChild(filter);
	// Apply the filter to the SVG image
	var svgImage = svgDocument.querySelector("image");
	svgImage.style.filter = "url(#grayscale-filter)";
}
