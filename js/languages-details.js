/*
    Scripts for the Portfolio Site
    Selepe Sello - TebogoYungMercykay
*/

// * Language Section, A function for Adding event Listeners

document.addEventListener('DOMContentLoaded', function() {
    let allEventListeners = function() {
        let imgBx = document.querySelectorAll('.imgBx');
        let languages_contentBx = document.querySelectorAll('.languages_contentBx');
        for (let img of imgBx) {
            img.addEventListener('mouseover', function() {
                for (let language of languages_contentBx) {
                    language.className = 'languages_contentBx';
                }
                document.getElementById(this.dataset.id).className = 'languages_contentBx active';
                for (let img of imgBx) {
                    img.className = 'imgBx';
                }
                this.className = 'imgBx active';
            });
        }
        // console.log("allEventListeners Done!!");
    }
    
    // Fetching and populating images from the JSON file
    
    fetch('./json/languages-data.json')
      .then(response => response.json())
      .then(data => {
        const languagesIcon = document.getElementById('languages_icon');
    
        data.forEach(imageData => {
            languagesIcon.innerHTML += `
            <div class="imgBx" style="--i:${imageData.style};" data-id="${imageData.id}">
                <img src="${imageData.imagesrc}" alt="${imageData.altText}">
            </div>
            `;
        });
        allEventListeners();
    })
    .catch(error => console.error('Error fetching data:', error));
    
    
    // Fetching and populating images from the JSON file
    
    fetch('./json/languages-details.json')
      .then(response => response.json())
      .then(data => {
        const languagesContent = document.getElementById('languages_content');
        let count = 0;
        data.forEach(languageData => {
            if (count++ == 0) {
                languagesContent.innerHTML += `<div class="languages_contentBx active" id="languages_content${languageData.id}">
                    <div class="card">
                        <div class="imgBx">
                            <img src="${languageData.imagesrc}" alt="Image${languageData.id}">
                        </div>
                        <div class="textBx">
                            <h2 class="Type_C"> #${languageData.id}. ${languageData.name} <br>
                                <span> ${languageData.description} </span>
                            </h2>
                            <ul class="sci">
                                <li class="view_on_github"> ${languageData.repositories} Repositories on GitHub </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
            } else {
                languagesContent.innerHTML += `<div class="languages_contentBx" id="languages_content${languageData.id}">
                    <div class="card">
                        <div class="imgBx">
                            <img src="${languageData.imagesrc}" alt="Image${languageData.id}">
                        </div>
                        <div class="textBx">
                            <h2 class="Type_C"> #${languageData.id}. ${languageData.name} <br>
                                <span> ${languageData.description} </span>
                            </h2>
                            <ul class="sci">
                                <li class="view_on_github"> ${languageData.repositories} Repositories on GitHub </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
            }
        });
        allEventListeners();
    })
    .catch(error => console.error('Error fetching data:', error));
});
