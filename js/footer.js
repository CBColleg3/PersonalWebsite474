$( document ).ready(function() {

	console.log( "ready!" );
	makeFooter();

	function makeFooter() {
        var navbar = document.createElement("div");
        navbar.innerHTML = 
        `
        <nav id="NavbarFooter" class="navbar navbar-expand-sm topnav-centered" style="margin-top: 30rem; height: 25vh">
            <ul class="navbar-nav">
                <li class="nav-item hover-underline-animation">
                    <a class="nav-link" href="https://mail.google.com/" style="cursor: pointer; color: white !important">cbcolleg@udel.edu</a>
                </li>
                <li class="nav-item hover-underline-animation">
                    <a class="nav-link" href="https://github.com/CBColleg3" style="cursor: pointer; color: white !important">GitHub</a>
                </li>
                <li class="nav-item hover-underline-animation">
                    <a class="nav-link" style="cursor: pointer; color: white !important" href="https://www.linkedin.com/in/christopher-bennett-b11167168/">Linkedin</a>
                </li>
                <li class="nav-item hover-underline-animation">
                    <a class="nav-link" href="https://store.steampowered.com/app/2303670/Escape_From_The_Sun/" style="cursor: pointer; color: white !important">Steam</a>
                </li>
                <li class="nav-item hover-underline-animation">
                    <a class="nav-link" href="https://spacegames3.itch.io/" style="cursor: pointer; color: white !important">Itch.io</a>
                </li>
            </ul>
        </nav> 
        
        `;

        document.querySelector("#FooterHere").appendChild(navbar);
	
	}

});