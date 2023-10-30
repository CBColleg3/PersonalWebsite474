let classLinkShown = false;

$( document ).ready(function() {

	console.log( "ready!" );
	createDropDown();

	function createDropDown() {
		var classPage = document.createElement("div");
		classPage.innerHTML = `
		<a class="nav-link" href="https://mattm401.github.io/" style="color: white !important;">
			Class Page
		</a>`;
		classPage.style = "";
		classPage.className = "navbar-header hover-underline-animation";
		document.querySelector("#Dropdown").appendChild(classPage);

		var prevStudent = document.createElement("div");
		prevStudent.innerHTML = `
		<a class="nav-link" href="https://mghansen1.github.io/" style="color: white !important;">
			Previous Student
		</a>`;
		prevStudent.style = "";
		prevStudent.className = "navbar-header hover-underline-animation";
		document.querySelector("#Dropdown").appendChild(prevStudent);

		var nextStudent = document.createElement("div");
		nextStudent.innerHTML = `
		<a class="nav-link" href="https://mbiet11.github.io/" style="color: white !important;">
			Next Student
		</a>`;
		nextStudent.style = "";
		nextStudent.className = "navbar-header hover-underline-animation";
		document.querySelector("#Dropdown").appendChild(nextStudent);
	}



});

export function showDropDown() {

	if(!classLinkShown) {
		document.querySelector("#Dropdown").style.visibility = "";
	} else {
		document.querySelector("#Dropdown").style.visibility = "hidden";
	}
	classLinkShown = !classLinkShown;
}