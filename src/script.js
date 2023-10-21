// * Updating The CSS Variable as The Width-Dimensions Change:

function updateVariableBasedOnViewport() {
	// Get the viewport width
	const viewportWidth = window.innerWidth;
	if (viewportWidth < 371) {
		document.documentElement.style.setProperty("--ratio-px-manipulation", "3px");
		document.documentElement.style.setProperty("--ratio-em-manipulation", "3em");
	} else if (viewportWidth < 462) {
		document.documentElement.style.setProperty("--ratio-px-manipulation", "4.4px");
		document.documentElement.style.setProperty("--ratio-em-manipulation", "4.4em");
	} else if (viewportWidth < 520) {
		document.documentElement.style.setProperty("--ratio-px-manipulation", "5px");
		document.documentElement.style.setProperty("--ratio-em-manipulation", "5em");
	} else if (viewportWidth < 768) {
		document.documentElement.style.setProperty("--ratio-px-manipulation", "6px");
		document.documentElement.style.setProperty("--ratio-em-manipulation", "6em");
	} else {
		document.documentElement.style.setProperty("--ratio-px-manipulation", "10px");
		document.documentElement.style.setProperty("--ratio-em-manipulation", "10em");
	}
}

// * This Function is Called when the Page Loads and on Window Resize

window.addEventListener("resize", updateVariableBasedOnViewport);
window.addEventListener("load", updateVariableBasedOnViewport);
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

// * Sending Form Data Via Email

// SmtpJS.com:
// Website: https://smtpjs.com/
// Script: https://smtpjs.com/v3/smtp.js
function sendEmail(name, subject, email, mobile, message) {
	Email.send({
		SecureToken: "e55a2ab4-902c-4210-9a0a-d3684e57227f",
		To: 'sbkskhalo.kq@gmail.com',
		From: email,
		Subject: "PORTFOLIO: New Contact Form Enquiry",
		Body: "Name: " + name + "<br> Subject: " + subject + "<br> Email: " + email + "<br> Mobile: " + mobile + "<br> Message: " + message
	}).then(alert("Thank You for Contacting Me, You shall have a Great Day ahead."));
}

// * InputValidation

function confirmDetails() {
	// Storing User Inputs
	var name = document.getElementById("name").value;
	var subject = document.getElementById("subject").value;
	var email = document.getElementById("email").value;
	var mobile = document.getElementById("mobile_number").value;
	var message = document.getElementById("message").value;
	var check = false;
	if (!check) {
		// Sending an Enquiry Email
		sendEmail(name, subject, email, mobile, message);
	}
	// Clearing Inputs
	document.getElementById("name").value = "";
	document.getElementById("subject").value = "";
	document.getElementById("email").value = "";
	document.getElementById("mobile_number").value = "";
	document.getElementById("message").value = "";
	return check;
}

var form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
	e.preventDefault();
	fetch(form.action, {
		method: "POST",
		body: new FormData(document.getElementById("contact-form")),
	}).then(
		response => response.json()
	).then((html) => {
		console.log("Thank You for Contacting Me, You shall have a Great Day ahead.");
	});
});

// * Language Section

let imgBx = document.querySelectorAll('.imgBx');
let languages_contentBx = document.querySelectorAll('.languages_contentBx');
for (let i = 0; i < imgBx.length; i++) {
	imgBx[i].addEventListener('mouseover', function() {
		for (let i = 0; i < languages_contentBx.length; i++) {
			languages_contentBx[i].className = 'languages_contentBx';
		}
		document.getElementById(this.dataset.id).className = 'languages_contentBx active';
		for (let ik = 0; ik < imgBx.length; ik++) {
			imgBx[ik].className = 'imgBx';
		}
		this.className = 'imgBx active';
	});
}

// * Animation Scripting

const backgroundAnimation = document.getElementById('backgroundAnimation');
const numBoxes = 800;

for (let i = 0; i < numBoxes; i++) {
	const colorBoxEffect = document.createElement('div');
	colorBoxEffect.classList.add('colorBoxEffect');
	backgroundAnimation.append(colorBoxEffect)
}

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
		document.documentElement.style.setProperty('--main-color', 'hsl(197, 100%, 50%)');
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
		document.documentElement.style.setProperty('--grey-color', 'hsla(0, 0%, 18%, 0.89)');
		document.documentElement.style.setProperty('--projects-grey-color', 'hsla(0, 0%, 67%, 0.209)');
		document.documentElement.style.setProperty('--transparent-bg-color', 'hsla(185, 98%, 21%, 0.33)');
		document.documentElement.style.setProperty('--animation-color', 'hsla(179, 50%, 51%, 0.904)');
		document.documentElement.style.setProperty('--lang-color', 'hsla(329, 100%, 32%, 0.58)');
		document.documentElement.style.setProperty('--lang-color-yel', 'hsla(70, 98%, 16%, 0.62)');
	}
}

// // * The View on GitHub link for the Languages:
// const viewOnGithubLinks = document.querySelectorAll('.view_on_github');
// viewOnGithubLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//         const activeDiv = document.querySelector('.imgBx.active');
//         const dataId = activeDiv.getAttribute('data-id');
//         switch (dataId) {
//             case "languages_content1": // CPP
//                 window.open('https://github.com/TebogoYungMercykay/Towers_Of_Hanoi----Recursion_And_STL_Stacks.git', '_blank');
//                 break;
//             case "languages_content2": // Java
//                 window.open('https://github.com/TebogoYungMercykay/Relational-Database_Using_Self-organizing_Treaps.git', '_blank');
//                 break;
//             case "languages_content3": // JS
//                 window.open('https://github.com/TebogoYungMercykay/The-Complete-Web-Development-Practice-Space.git', '_blank');
//                 break;
//             case "languages_content4": // PHP
//                 window.open('https://github.com/TebogoYungMercykay/The-Complete-Web-Development-Practice-Space.git', '_blank');
//                 break;
//             case "languages_content5": // H&C
//                 window.open('https://github.com/TebogoYungMercykay/The-Complete-Web-Development-Practice-Space.git', '_blank');
//                 break;
//             case "languages_content6": // Python
//                 window.open('https://github.com/TebogoYungMercykay/Python_Codes_for_Mathematical_Problem_Solving.git', '_blank');
//                 break;
//             case "languages_content7": // TypeScript
//                 window.open('https://github.com/TebogoYungMercykay/Project-4---Building-Serverless-Project-in-Aws.git', '_blank');
//                 break;
//             case "languages_content8": // C#
//                 window.open('https://github.com/TebogoYungMercykay/CSharp---Windows_Forms_App.git', '_blank');
//                 break;
//             default: // Repositories
//                 window.open('https://github.com/TebogoYungMercykay?tab=repositories', '_blank');
//                 break;
//         }
//     });
// });
