// Fetching and populating images from the JSON file

fetch('./json/most-used-languages.json')
  .then(response => response.json())
  .then(data => {
    const portfolioContent = document.getElementById('portfolio-content');

    data.forEach(languageData => {
        portfolioContent.innerHTML += `<div class="progress">
            <h3> ${languageData.name} <span>${languageData.percentage}%</span>
            </h3>
            <div class="bar">
                <span></span>
            </div>
        </div>`;
    });
})
.catch(error => console.error('Error fetching data:', error));