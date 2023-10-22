// * Function to ensure all content dividers have the same height

function updateHeightsContent() {
    console.log("Making sure all the Content Dividers have the same Height");

    const journeyContentDivs = document.querySelectorAll('.content');
    const maxHeight = findMaxHeight(journeyContentDivs);

    setHeightForAll(journeyContentDivs, maxHeight);
}

// * Function to find the maximum height among content dividers

function findMaxHeight(contentDivs) {
    let maxHeight = 0;
    contentDivs.forEach(function (contentDiv) {
        const contentHeight = contentDiv.clientHeight;
        if (contentHeight > maxHeight) {
            maxHeight = contentHeight;
        }
    });
    return maxHeight;
}

// * Function to set the same height for all content dividers

function setHeightForAll(contentDivs, height) {
    contentDivs.forEach(function (contentDiv) {
        console.log("Done: ", height, 'px');
        contentDiv.style.height = height + 'px';
    });
}

// * Function to populate education or experience data

function populateEducationData(elementId, dataArray) {
    const container = document.getElementById(elementId);
    let html = '';

    dataArray.forEach(item => {
        html += `
            <div class="journey-content">
                <div class="content">
                    <div class="year">
                        <i class="bx bxs-calendar"></i> ${item.year}
                    </div>
                    <h3> ${item.institution || item.position} </h3>
                    <p> ${item.details} </p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function populateExperienceData(elementId, data) {
    const container = document.getElementById(elementId);
    let html = '';

    html += `
        <div class="journey-box">
            <div class="journey-content">
                <div class="content">
                    <div class="journey-background"></div>
                    <div class="year">
                        <i class="bx bxs-calendar"></i> ${data.year}
                    </div>
                    <h3> ${data.institution || data.position} </h3>
                    <p> ${data.details} </p>
                </div>
            </div>
        </div>
    `;

    container.innerHTML += html;
}

// * Fetch and populate data from JSON

fetch('./json/about-data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('about-description').innerHTML = data.description;
        populateEducationData('education_box_data', data.education, 'education');
        for (let k = 0; k < data.experience.length; k++) {
            populateExperienceData('experience_box_data', data.experience[k]);
        }
        updateHeightsContent();
    })
    .catch(error => console.error('Error fetching data:', error));

