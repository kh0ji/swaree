import React from 'react'
import "./Header.scss"
function Header() {
    return (
       <div class="Header sticky-top">
    
<nav class="navbar navbar-expand-lg dark " >
    <div class="container-fluid d-xl-flex justify-content-lg-around">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex flex-sm-column flex-column flex-lg-row justify-content-lg-around justify-content-sm-center flex-grow-1">
            <ul class="navbar-nav mb-2 mb-lg-0 nav--links">
                <li class="nav-item p-2 home-link">
                    <a class="nav-link " aria-current="page" href="#">
                    <img  src="/Images/Register.png" width="120px" height="80px"/></a>
                </li>
              

            </ul>
            <div class="d-flex align-items-start align-items-lg-center flex-column flex-lg-row unscroll">
                <button type="button" class="btn nav-btn me-2 scroll-btn login-btn" data-bs-toggle="modal"
                    data-bs-target="#Login">
                    Login
                </button>
                <button type="button" class="btn btn-dark nav-btn btn-round register-btn" data-bs-toggle="modal"
                    data-bs-target="#Register">
                    Register
                </button>
            </div>
            </div>
        </div>
    </div>
</nav>
</div>  
    )
}

export default Header
