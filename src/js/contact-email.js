// * Sending Form Data Via Email

// SmtpJS.com:
// Website: https://smtpjs.com/
// Script: https://smtpjs.com/v3/smtp.js
function sendEmail(name, subject, email, mobile, message) {
	Email.send({
		SecureToken: "e55a2ab4-902c-4210-9a0a-d3684e57227f",
		To: 'sbkskhalo.kq@gmail.com',
		From: email,
		Subject: "PORTFOLIO: New Contact Form Enquiry",
		Body: `Name: ${name}<br> Subject: ${subject}<br> Email: ${email}<br> Mobile: ${mobile}<br> Message: ${message}`
	}).then(alert("Thank You for Contacting Me, You shall have a Great Day ahead."));
}

// * InputValidation

function confirmDetails() {
    // Storing User Inputs
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile_number").value;
    var message = document.getElementById("message").value;
    var check = true;

    // Checking if all inputs are not empty
    if (name == "" || subject == "" || email == "" || mobile == "" || message == "") {
        alert("All fields must be filled out");
        check = false;
    }

    // Checking if name contains only letters
    if (!/^[a-zA-Z]+$/.test(name)) {
        alert("Name must contain only letters");
        check = false;
    }

    // Checking if email is valid
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        alert("Email must contain a '@' and at least one character on the left and right of '@'");
        check = false;
    }

	// Checking if mobile number contains only digits
    if (!/^\d+$/.test(mobile)) {
        alert("Mobile number must contain only digits");
        check = false;
    }

    if (check == true) {
        // Sending an Enquiry Email
        sendEmail(name, subject, email, mobile, message);
    }

    return check;
}

var form = document.getElementById("contact-form");
form.addEventListener("submit", event => {
	event.preventDefault();
	fetch(form.action, {
		method: "POST",
		body: new FormData(document.getElementById("contact-form")),
	}).then(
		response => response.json()
	).then((html) => {
		console.log("Thank You for Contacting Me, You shall have a Great Day ahead.");
        reset();
	});
});

function reset() {
    // Clearing Inputs
    document.getElementById("name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile_number").value = "";
    document.getElementById("message").value = "";
}