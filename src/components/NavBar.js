import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar sticky-top navbar-dark bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                    <img src="brand-logo1.png" alt="samara-brand-logo" width="180"/>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h3 class="menu-bar-label text-muted">MENU</h3>
                    <a href="https://drive.google.com/file/d/1yE0k1OZh83v79ooQfHw9iRkDv7tV8b-8/view?usp=sharing"><h5 class="menu-link text-white">Resume.</h5></a>
                    <a href="http://github.com/samaracodes"><h5 class="menu-link text-white">Github Projects.</h5></a>
                    <a href="mailto:samaracodes@gmail.com"><h5 class="menu-link text-white">Email.</h5></a>


                </div>
            </div>

            
               
        </div>
    )
}

export default NavBar