document.getElementById("navHome").innerHTML = `    <nav class="navbar-default">
<div class="navbar-header nvhead">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" target="#mynavbar" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </button>                        
    <a class="nvbar-brand">
        <img src="images/Earth_Globe.png">
    </a>
</div>
<div class="collapse navbar-collapse" id="myNavbar">
    <ul class="nav navbar-nav navbar-btn btn nvbrlinks">
        <li><a href="index.html">Home</a></li>
        <li><a href="about-us.html">About Us</a></li>
        <li><a href="RCLA.html">Language Center</a></li>
        <li><a href="Translation.html">Translation and Interpretation</a></li>
        <li><a href="Employment.html">Employment Opportunities</a></li>
        <li><a href="Contact.html">Contact Us</a></li>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Endeavors <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="#">Language Center Website</a></li>
                <li><a href="#">Technical Training Website</a></li>
            </ul>
        </li>
    </ul>
</div>
</nav>`;