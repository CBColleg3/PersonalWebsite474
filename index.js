$( document ).ready(function() {

	console.log( "ready!" );

	document.getElementById("AboutMeLink").onclick = () => {
		console.log("click is running! Lets Go");
		document.getElementById("Home").style.display = "none";
		document.getElementById("AboutMe").style.display = "";
		document.getElementById("Contacts").style.display = "none";
		document.getElementById("WorkHistory").style.display = "none";
	}

	document.getElementById("HomePage").onclick = () => {
		console.log("click is running! Lets Go");
		document.getElementById("Home").style.display = "";
		document.getElementById("AboutMe").style.display = "none";
		document.getElementById("Contacts").style.display = "none";
		document.getElementById("WorkHistory").style.display = "none";
	}

	document.getElementById("ContactsPage").onclick = () => {
		console.log("click is running! Lets Go");
		document.getElementById("Home").style.display = "none";
		document.getElementById("AboutMe").style.display = "none";
		document.getElementById("Contacts").style.display = "";
		document.getElementById("WorkHistory").style.display = "none";
	}

	document.getElementById("WorkHistoryPage").onclick = () => {
		console.log("click is running! Lets Go");
		document.getElementById("Home").style.display = "none";
		document.getElementById("AboutMe").style.display = "none";
		document.getElementById("Contacts").style.display = "none";
		document.getElementById("WorkHistory").style.display = "";
	}

	document.getElementById("PrevStudentButton").onclick = () => {
		window.location.href = "https://mghansen1.github.io/";
	}
});