import {createDropDown, hideDropDown, showDropDown} from "./index.js";


$( document ).ready(function() {

	console.log( "ready!" );
	makeNavbar();

	function makeNavbar() {
        var navbar = document.createElement("nav");
        navbar.id = "NavbarHeader";
        navbar.className = "navbar navbar-expand-sm topnav-centered";
        navbar.innerHTML =   
        `
            <div class="navbar-header hover-underline-animation">             
                <a href="./index.html" class="navbar-brand" id="HomePage" style="cursor: pointer; font-size: 1.3em; margin-left: 10px; margin-right: 10px">
                    <img src="images/christitlepfp.jpg" alt="picture of Chris Bennett" width="60" height="60">
                </a>
            </div>
           
            <ul class="navbar-nav">
                <li class="nav-item hover-underline-animation">
                    <a class="nav-link" href="./aboutMe.html" id="AboutMeLink" style="color: white !important; cursor: pointer;">About Me</a>
                </li>
                <li class="nav-item hover-underline-animation">
                    <a class="nav-link" href="./contacts.html" id="ContactsPage" style="color: white !important; cursor: pointer;">Contacts</a>
                </li>
                <li class="nav-item hover-underline-animation">
                    <a class="nav-link" href="./resume.html" id="ResumePage" style="color: white !important; cursor: pointer;">Resume</a>
                </li>
                <li class="nav-item hover-underline-animation">
                    <a class="nav-link" href="./projects.html" id="ProjectsPage" style="color: white !important; cursor: pointer;">Projects</a>
                </li>
                <li id="ClassLinks" class="nav-item dropdown">
                    <button id="ClassLinksList" class="btn btn-dark dropdown-toggle" style="margin-left:12px;  margin-top: 7px;" 
                    data-bs-toggle="dropdown" aria-expanded="false">Class Links</button>
                    <ul id="Dropdown" class="dropdown-menu dropdown-menu-dark">
                    </ul>
                </li>
            </ul>  
        
        `;

        document.querySelector("#NavbarHere").appendChild(navbar);
        createDropDown();
        hideDropDown();

        document.querySelector("#NavbarHere").querySelector("#NavbarHeader").querySelector("#ClassLinks").onmouseover = () => {
            //Submit Button Link clicked,call validate form function.
            console.log("class links clicked");
            showDropDown();
        }

        /*

        document.querySelector("#NavbarHere").querySelector("#NavbarHeader").querySelector("#ClassLinks").onmouseout = () => {
            //Submit Button Link clicked,call validate form function.
            console.log("class links clicked");
            hideDropDown();
        }
        */
	
	}

});