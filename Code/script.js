// toddle icon navbar
let menuIcon = document.querySelector ('#menu-icon');
let navbar = document . querySelector ('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Smooth scrolling
let sections = document.querySelectorAll ('section');
let navLinks = document.querySelectorAll ('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');
        if((top >= offset) && (top < (offset + height))){
            // Active navbar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // For an animation that repeats on scroll:
        else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Removing navbar and toddle icon onScroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Footer animation on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

// SmtpJS.com:
// Website: https://smtpjs.com/
// Script: https://smtpjs.com/v3/smtp.js
function sendEmail(name, subject, email, mobile, message) {
    Email.send({
        SecureToken : "e55a2ab4-902c-4210-9a0a-d3684e57227f",
        To : 'sbkskhalo.kq@gmail.com',
        From : email,
        Subject : "PORTFOLIO: New Contact Form Enquiry",
        Body : "Name: " + name + "<br> Subject: " + subject + "<br> Email: " + email + "<br> Mobile: " + mobile + "<br> Message: " + message
    }).then( console.log("Thank You for Contacting Me, You shall have a Great Day ahead."));
}
// InputValidation
function confirmDetails() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile_number").value;
    var message = document.getElementById("message").value;
    var check = false;
    if(check) {
        sendEmail(name, subject, email, mobile, message);
    }
    return check;
}

var form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("contact-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        console.log("Thank You for Contacting Me, You shall have a Great Day ahead.");
    });
});
