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
		html.setAttribute('current-theme', 'dark');
		modifyVariables('dark');
		changeThemeTo('dark');
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
		document.documentElement.style.setProperty('--bg-color', 'hsla(0, 0%, 15%, 0.99)');
		document.documentElement.style.setProperty('--black-color', 'hsla(0, 0%, 0%, 0.962)');
		document.documentElement.style.setProperty('--second-bg-color', 'hsla(0, 0%, 10%, 0.948)');
		document.documentElement.style.setProperty('--animation-color', 'hsla(0, 0%, 65%, 0.082)');
		document.documentElement.style.setProperty('--grad-animation-color', 'hsla(0, 0%, 64%, 0.073)');
		document.documentElement.style.setProperty('--grad1-animation-color', 'hsla(0, 0%, 64%, 0)');
		document.documentElement.style.setProperty('--text-color', 'hsl(0, 0%, 95%)');
		document.documentElement.style.setProperty('--main-color', 'hsl(0, 0%, 70%)');
		document.documentElement.style.setProperty('--main-box-color', 'hsla(165, 100%, 100%, 0.977)');
		document.documentElement.style.setProperty('--lang-color', 'hsla(165, 100%, 98%, 0.98)');
		document.documentElement.style.setProperty('--lang-color-yel', 'hsla(160, 100%, 98%, 0.08)');
		document.documentElement.style.setProperty('--transparent-bg-color', 'hsla(0, 0%, 100%, 0.18)');
		document.documentElement.style.setProperty('--grey-color', 'hsla(165, 100%, 98%, 0.508)');
		document.documentElement.style.setProperty('--projects-grey-color', 'hsla(0, 0%, 57%, 0.09)');
		document.documentElement.style.setProperty('--contact-input-hover', 'hsla(0, 100%, 100%, 0.999)');
		document.documentElement.style.setProperty('--color-box-effect', 'hsla(165, 100%, 98%, 0.25)');
		modifySVGImage(mode);
	} else {
		document.documentElement.style.setProperty('--bg-color', 'hsl(0, 0%, 100%)');
		document.documentElement.style.setProperty('--black-color', 'hsla(0, 0%, 96%, 0.983)');
		document.documentElement.style.setProperty('--second-bg-color', 'hsla(0, 0%, 75%, 0.7)');
		document.documentElement.style.setProperty('--animation-color', 'hsla(185, 100%, 10%, 0.158)');
		document.documentElement.style.setProperty('--grad-animation-color', 'hsla(185, 100%, 10%, 0.124)');
		document.documentElement.style.setProperty('--grad1-animation-color', 'hsla(185, 100%, 10%, 0)');
		document.documentElement.style.setProperty('--text-color', 'hsla(0, 0%, 8%, 0.844)');
		document.documentElement.style.setProperty('--main-color', 'hsla(185, 100%, 12%, 0.737)');
		document.documentElement.style.setProperty('--main-box-color', 'hsl(185, 100%, 19%)');
		document.documentElement.style.setProperty('--lang-color', 'hsla(185, 100%, 32%, 0.58)');
		document.documentElement.style.setProperty('--lang-color-yel', 'hsla(180, 98%, 16%, 0.62)');
		document.documentElement.style.setProperty('--transparent-bg-color', 'hsla(185, 98%, 21%, 0.178)');
		document.documentElement.style.setProperty('--grey-color', 'hsla(0, 0%, 18%, 0.89)');
		document.documentElement.style.setProperty('--projects-grey-color', 'hsla(0, 0%, 67%, 0.209)');
		document.documentElement.style.setProperty('--contact-input-hover', 'hsla(185, 98%, 21%, 0.178)');
		document.documentElement.style.setProperty('--color-box-effect', 'hsla(185, 100%, 10%, 0.5)');
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
