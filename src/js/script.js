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

// * Showing the Modal when the Download Button is Clicked

function showModal() {
	$('#largeModal').modal('show');
}

// * This Function is Called when the Page Loads and on Window Resize

window.addEventListener("resize", updateVariableBasedOnViewport);
window.addEventListener("load", updateVariableBasedOnViewport);

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
