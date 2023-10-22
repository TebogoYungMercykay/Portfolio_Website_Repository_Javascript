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
		Body: "Name: " + name + "<br> Subject: " + subject + "<br> Email: " + email + "<br> Mobile: " + mobile + "<br> Message: " + message
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
	var check = false;
	if (!check) {
		// Sending an Enquiry Email
		sendEmail(name, subject, email, mobile, message);
	}
	// Clearing Inputs
	document.getElementById("name").value = "";
	document.getElementById("subject").value = "";
	document.getElementById("email").value = "";
	document.getElementById("mobile_number").value = "";
	document.getElementById("message").value = "";
	return check;
}

var form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
	e.preventDefault();
	fetch(form.action, {
		method: "POST",
		body: new FormData(document.getElementById("contact-form")),
	}).then(
		response => response.json()
	).then((html) => {
		console.log("Thank You for Contacting Me, You shall have a Great Day ahead.");
	});
});