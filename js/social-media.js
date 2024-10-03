// Fetching and populating images from the JSON file

document.addEventListener('DOMContentLoaded', function() {
	fetch('./json/social-media.json')
		.then(response => response.json())
		.then(data => {
			// Contact Page
			const contactSci = document.querySelector('.contact-sci');
			data.forEach(socialMedia => {
				const link = document.createElement('a');
				link.href = socialMedia.url;
				link.target = '_blank';
				link.rel = 'noopener';
				link.innerHTML = `<i class="bx bxl-${socialMedia.name.toLowerCase()}"></i>`;
				contactSci.appendChild(link);
			});
			// Home Page
			const homeSci = document.querySelector('.home-sci');
			data.forEach(socialMedia => {
				const link = document.createElement('a');
				link.href = socialMedia.url;
				link.target = '_blank';
				link.rel = 'noopener';
				link.innerHTML = `<i class="bx bxl-${socialMedia.name.toLowerCase()}"></i>`;
				homeSci.appendChild(link);
			});
		}
	).catch(error => console.error('Error fetching social media data:', error));
});
