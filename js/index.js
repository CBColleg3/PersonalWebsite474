$( document ).ready(function() {

	console.log( "ready!" );

	document.getElementById("AboutMeLink").onclick = () => {
		//About me Link clicked, show it and then hide every other page.
		console.log("click is running! Lets Go");
		document.getElementById("Home").style.display = "none";
		document.getElementById("AboutMe").style.display = "";
		document.getElementById("Contacts").style.display = "none";
		document.getElementById("WorkHistory").style.display = "none";
	}

	document.getElementById("HomePage").onclick = () => {
		//Home Page Link clicked, show it and then hide every other page.
		console.log("click is running! Lets Go");
		document.getElementById("Home").style.display = "";
		document.getElementById("AboutMe").style.display = "none";
		document.getElementById("Contacts").style.display = "none";
		document.getElementById("WorkHistory").style.display = "none";
	}

	document.getElementById("ContactsPage").onclick = () => {
		//Contacts Page Link clicked, show it and then hide every other page.
		console.log("click is running! Lets Go");
		document.getElementById("Home").style.display = "none";
		document.getElementById("AboutMe").style.display = "none";
		document.getElementById("Contacts").style.display = "";
		document.getElementById("WorkHistory").style.display = "none";
	}

	document.getElementById("WorkHistoryPage").onclick = () => {
		//Work History Link clicked, show it and then hide every other page.
		console.log("click is running! Lets Go");
		document.getElementById("Home").style.display = "none";
		document.getElementById("AboutMe").style.display = "none";
		document.getElementById("Contacts").style.display = "none";
		document.getElementById("WorkHistory").style.display = "";
	}

	document.getElementById("PrevStudentButton").onclick = () => {
		//Prev Student Link clicked, go to link provided.
		window.location.href = "https://mghansen1.github.io/";
	}

	document.getElementById("NextStudentButton").onclick = () => {
		//Next Student Link clicked, go to link provided.
		window.location.href = "https://mbiet11.github.io/";
	}

	document.getElementById("ContactSubmitButton").onclick = () => {
		//Submit Button Link clicked,call validate form function.
		console.log("submit button clicked");
		validateForm();
	}

	/*ValidateForm()
	*args: None
	*returns: false (boolean);
	*Validates the form by getting all of the contact form fields and seeing if the
	*First name, last name, and the message are not null, check if the email is not null and if it includes an @ and a .
	*And check if the phone number is 10 characters long and its a number.
	*/
	function validateForm() {
		let lastName = document.forms["contactForm"]["lname"].value;
		let firstName = document.forms["contactForm"]["fname"].value;
		let email = document.forms["contactForm"]["email"].value;
		let phonenumber = document.forms["contactForm"]["phonenumber"].value;
		let message = document.forms["contactForm"]["message"].value;

		let alertMessage = "";
		if (lastName === "") {
		  alertMessage += "Last Name must be filled out.\n";
		}
		if(firstName === "") {
			alertMessage += "First Name must be filled out.\n";
		}
		if(email === "") {
			alertMessage += "Email must be filled out.\n";
		}
		if(!email.includes("@") || !email.includes(".")) {
			alertMessage += "Please provide a valid email address.\n";
		}
		if(phonenumber === "") {
			alertMessage += "Phone Number must be filled out.\n";
		}
		if(parseInt(phonenumber).toString().length !== 10) {
			alertMessage += "Please provide a valid phone number.\n";
		}
		if(message === "") {
			alertMessage += "Your message is empty, please type one!\n";
		}
		
		if(alertMessage==="") SendEmail(email, message, firstName, lastName, phonenumber); else alert(alertMessage);
		return false;
	}

	/*SendEmail()
	*args:
	*  fromEmail: the email provided in the email input field
	*  message: the message provided in the message input field
	*  firstname: the firstname provided in the firstname input field
	*  lastname: the lastname provided in the lastname input field
	*  phonenumber: the phonenumber provided in the phonenumber input field
	*
	*returns: None;
	*Sends email using all of the args provided into a templateParms object which is then used in a 
	*emailjs.send which sends our templateParams to my email address with the given authentication ids.
	*/
	function SendEmail(fromEmail, message, firstName, lastName, phonenumber) {
		alert("Contact form submitted!");
		console.log("send Email called");
		emailjs.init("qfLAXM3_PrqUGKzQJ"); //please encrypted user id for malicious attacks
		console.log("fromEmail: ", fromEmail);
		console.log("message: ", message);

		var templateParams = {
		to_name: 'Christopher Bennett',
		from_name: fromEmail,
		message: message + "\n" + firstName + " " + lastName + " | " + phonenumber
		};
	
		emailjs.send('service_7pxsn3w', 'template_v6cnqzi', templateParams)
		.then(function(response) {
			console.log('SUCCESS!', response.status, response.text);
		}, function(error) {
			console.log('FAILED...', error);
		});
	}

});