// Fetch and populate data from JSON
fetch('./JSON/about-data.json')
        .then(response => response.json())
        .then(data => {
        // Populate the "About Me" section
        document.getElementById('about-description').innerHTML = data.description;

        // Iterate through education and experience data and populate the sections

        for (let k = 0; k < data.education.length; k++) {
            if (k == 0) {
                document.getElementById('education_box_data').innerHTML = `
                <div class="journey-content">
                    <div class="content">
                        <div class="year">
                            <i class="bx bxs-calendar"></i> ${data.education[k].year}
                        </div>
                        <h3> ${data.education[k].institution} </h3>
                        <p> ${data.education[k].details} </p>
                    </div>
                </div>
                `;
            } else {
                document.getElementById('education_box_data').innerHTML += `
                <div class="journey-content">
                    <div class="content">
                        <div class="year">
                            <i class="bx bxs-calendar"></i> ${data.education[k].year}
                        </div>
                        <h3> ${data.education[k].institution} </h3>
                        <p> ${data.education[k].details} </p>
                    </div>
                </div>
                `;
            }
        }

        for (let k = 0; k < data.experience.length; k++) {
            document.getElementById('experience_box_data').innerHTML += `
            <div class="journey-box">
                <div class="journey-content">
                    <div class="content">
                        <div class="year">
                            <i class="bx bxs-calendar"></i> ${data.experience[k].year}
                        </div>
                        <h3> ${data.experience[k].position} </h3>
                        <p> ${data.experience[k].details} </p>
                    </div>
                </div>
            </div>
            `;
        }

    })
    .catch(error => console.error('Error fetching social media data:', error));
