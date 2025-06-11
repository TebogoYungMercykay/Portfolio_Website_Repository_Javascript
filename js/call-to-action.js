/*
    Scripts for the Portfolio Site
    Selepe Sello - TebogoYungMercykay
*/

// New Contact Form Enquiry

document.addEventListener('DOMContentLoaded', function () {
    // Clearing all FORM fields on DOM load
    const form = document.getElementById('contact-form');
    if (form) {
        form.reset();
    }

    const buttonActions = {
        "Custom_Button_0": {
            subject: "CONTACT FORM: Request for Resume",
            message: "Hi, I am interested in your resume. Please provide more details."
        },
        "Custom_Button_1": {
            subject: "CONTACT FORM: General Inquiry",
            message: "Hello, I would like to know more about your services."
        }
    };

    // Event Handlers
    Object.keys(buttonActions).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function (event) {
                // Preventinh the default form action
                event.preventDefault();
                prefillForm(buttonActions[buttonId]);
                scrollToContact();
            });
        }
    });

    function prefillForm({ subject, message }) {
        const subjectField = document.getElementById('subject');
        const messageField = document.getElementById('message');
        
        if (subjectField) {
            subjectField.value = subject;
        }
        if (messageField) {
            messageField.value = message;
        }
    }

    // Take User to the Contact Form section
    function scrollToContact() {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});
