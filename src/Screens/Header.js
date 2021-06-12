import React from 'react'
import "./Header.scss"
import {Link} from "react-router-dom"
function Header() {
    return (
       <div className="Header sticky-top">
    
<nav className="navbar navbar-expand-lg dark " >
    <div className="container-fluid d-xl-flex justify-content-lg-around">
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex flex-sm-column flex-column flex-lg-row justify-content-lg-around justify-content-sm-center flex-grow-1">
            <ul className="navbar-nav mb-2 mb-lg-0 nav--links">
                <li className="nav-item  home-link">
                    <Link className="nav-link " aria-current="page" to="/#">
                    <img  src="/Images/LogoIcon.png" width="60px" height="60px"  alt="logoo"/></Link>
                </li>
              

            </ul>
            <div className="d-flex align-items-start align-items-lg-center flex-column flex-lg-row unscroll">
                <Link to="/login" className="btn nav-btn me-2 scroll-btn login-btn">
                    Login
                </Link>
                <Link  className="btn btn-dark nav-btn btn-round register-btn" to="/register">
                    Register
                </Link>
            </div>
            </div>
        </div>
    </div>
</nav>
</div>  
    )
}

export default Header
