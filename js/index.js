let classLinkShown = false;

export function showDropDown() {
	document.querySelector("#Dropdown").style.visibility = "";
}

export function hideDropDown() {
	document.querySelector("#Dropdown").style.visibility = "hidden";
}


export function createDropDown() {
	var classPage = document.createElement("li");
	classPage.innerHTML = `	
	<a class="dropdown-item" href="https://mattm401.github.io/" style="width: 100%; text-align: center;">Class Page</a>`;
	classPage.style = "width: 100%;";
	classPage.className = "navbar-header hover-underline-animation";
	document.querySelector("#Dropdown").appendChild(classPage);

	var prevStudent = document.createElement("li");
	prevStudent.innerHTML = `
	<a class="dropdown-item" href="https://mghansen1.github.io/" style="width: 100%; text-align: center;">Previous Student</a>`;
	prevStudent.style = "width: 100%;";
	prevStudent.className = "navbar-header hover-underline-animation";
	document.querySelector("#Dropdown").appendChild(prevStudent);

	var nextStudent = document.createElement("li");
	nextStudent.innerHTML = `
	<a class="dropdown-item" href="https://mbiet11.github.io/" style="width: 100%; text-align: center;">Next Student</a>`;
	nextStudent.style = "width: 100%;";
	nextStudent.className = "navbar-header hover-underline-animation";
	document.querySelector("#Dropdown").appendChild(nextStudent);
}