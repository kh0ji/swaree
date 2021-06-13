import React, { useEffect } from 'react'
import "./Header.scss"
import {Link} from "react-router-dom"
import { Button } from "react-bootstrap";
import { auth } from '../firebase';
import { fetchuser } from '../FirebaseFuctions';


function Header({person,setperson}) {

  

 var logout=()=>{
     return auth.signOut().then((user) => {
  return user
}).catch((error) => {
   return error
});
}
 
    useEffect(()=>{

        async function fetchData() {
  
       var user=await fetchuser()
setperson(user)
   
  }
  fetchData();
   
    },[person,setperson])
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
            {person===null?(
                <>
                <Link to="/login" className="btn nav-btn me-2 scroll-btn login-btn">
                    Login
                </Link>
                <Link  className="btn btn-dark nav-btn btn-round register-btn" to="/register">
                    Register
                </Link>
                </>
            ):(<div style={{color:"white"}} className="d-flex">
            <div className="mr-3"><img className="rounded-circle" src={person.img} width="60px" height="60px" alt="er"/></div>
              <div className="d-flex flex-column">
                <p className="m-0">{person && person.name}</p>
                <p className="m-0">{person && person.email}</p>
                <Button variant="warning" className="w-50 text-white" onClick={logout}>Logout</Button>
              </div>
            </div>)}
                
            </div>
            </div>
        </div>
    </div>
</nav>
</div>  
    )
}

export default Header
