import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar sticky-top navbar-dark bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <img src="brand-logo1.png" alt="samara-brand-logo" width="180"/>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h5 class="text-white h4">Collapsed content</h5>
                    <span class="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>

            
               
        </div>
    )
}

export default NavBar