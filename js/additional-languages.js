// Fetching and populating images from the JSON file

document.addEventListener('DOMContentLoaded', function() {
	fetch('./json/additional-languages-data.json')
		.then(response => response.json())
		.then(data => {
			const portfolioContent = document.getElementById('portfolio-content-2');
	
			data.forEach(languageData => {
				portfolioContent.innerHTML += `<div class="progress">
				<h3> ${languageData.name} <span>${languageData.percentage}%</span>
				</h3>
				<div class="bar">
					<span></span>
				</div>
			</div>`;
			});
		}
	).catch(error => console.error('Error fetching data:', error));
});
