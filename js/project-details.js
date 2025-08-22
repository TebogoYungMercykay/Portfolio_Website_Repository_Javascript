/*
    Scripts for the Portfolio Site
    Selepe Sello - TebogoYungMercykay
*/

// Fetching and populating images from the JSON file

document.addEventListener('DOMContentLoaded', function() {
    fetch('./json/projects-data.json')
        .then(response => response.json())
        .then(data => {
            const projectsDetails = document.getElementById('projects-details');
    
            data.forEach(projectData => {
                const projectDetailsHTML = `<div class="section_project">
                    <h3 class="project_tittle"> ${projectData.title} <br> ${projectData.subtitle || ''} </h3>
                    <img class="project_image" src="${projectData.image}" alt="Image: ${projectData.title}" />
                    <br>
                    <div class="div-project-details">
                        <p class="project-details"> ${projectData.description || ''} </p>
                        ${projectData.hasOwnProperty('clientSide') ? `<p class="project-details">${projectData.clientSide}</p>` : ''}
                        ${projectData.hasOwnProperty('serverSide') ? `<p class="project-details">${projectData.serverSide}</p>` : ''}
                        ${projectData.hasOwnProperty('concepts') ? `<p class="project-details">${projectData.concepts}</p>` : ''}
                    </div>
                    ${projectData.hasOwnProperty('githubLink') ?
                        `<a href="${projectData.githubLink || ''}" class="view_project_on_github" title="view_project_on_github" target="_blank" rel="noopener">
                            <i class="bx bxl-github"></i> Project Code
                        </a>` : ''
                    }
                    ${projectData.hasOwnProperty('liveLink') ?
                        `<a href="${projectData.liveLink || ''}" class="view_project_on_github" title="view_project_on_github" target="_blank" rel="noopener">
                            <i class='bx bxl-netlify'></i> Live Demo
                        </a>` : ''
                    }
                </div>`;
    
                // Checking if the projectData object has a "title" property
                if (projectData.hasOwnProperty('title')) {
                    projectsDetails.innerHTML += projectDetailsHTML;
                }
            });
        }
    ).catch(error => console.error('Error fetching data:', error));
});

