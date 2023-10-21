// * Language Section

let allEventListeners = function() {
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
    console.log("allEventListeners Done!!");
}

// Fetching and populating images from the JSON file

fetch('./JSON/languages-data.json')
  .then(response => response.json())
  .then(data => {
    const languagesIcon = document.getElementById('languages_icon');

    data.forEach(imageData => {
        languagesIcon.innerHTML += `
        <div class="imgBx" style="--i:${imageData.style};" data-id="${imageData.id}">
            <img src="${imageData.imageSrc}" alt="${imageData.altText}">
        </div>
        `;
    });
    console.log(languagesIcon.innerHTML);
    allEventListeners();
})
.catch(error => console.error('Error fetching data:', error));
