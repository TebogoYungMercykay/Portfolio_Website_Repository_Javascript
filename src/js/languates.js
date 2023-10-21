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

/*
<div class="languages_icon">
    <div class="imgBx active" style="--i:2;" data-id="languages_content1">
        <img src="./Images/Languages/CPP.jpg" alt="Image1">
    </div>
    <div class="imgBx" style="--i:1;" data-id="languages_content2">
        <img src="./Images/Languages/Java.jpg" alt="Image2">
    </div>
    <div class="imgBx" style="--i:3;" data-id="languages_content3">
        <img src="./Images/Languages/Javascript.png" alt="Image3">
    </div>
    <div class="imgBx" style="--i:8;" data-id="languages_content4">
        <img src="./Images/Languages/PHP.jpg" alt="Image4">
    </div>
    <div class="imgBx" style="--i:4;" data-id="languages_content5">
        <img src="./Images/Languages/HTML_CSS.jpg" alt="Image5">
    </div>
    <div class="imgBx" style="--i:7;" data-id="languages_content6">
        <img src="./Images/Languages/Python.jpg" alt="Image6">
    </div>
    <div class="imgBx" style="--i:5;" data-id="languages_content7">
        <img src="./Images/Languages/Typescript.png" alt="Image7">
    </div>
    <div class="imgBx" style="--i:6;" data-id="languages_content8">
        <img src="./Images/Languages/CSharp.jpg" alt="Image8">
    </div>
</div>
*/