import React from 'react'
import "./Header.scss"
import {Link} from "react-router-dom"
import { Button,Navbar,Nav} from "react-bootstrap";
import { auth } from '../firebase';



function Header({person,setlogout}) {

  

 var logout=()=>{
      setlogout(false)
     return auth.signOut().then((user) => {
         setlogout(true)
  return user
}).catch((error) => {
   return error
});
}
 

    return (
       <div className="Header sticky-top d-flex justify-content-center">
       <Navbar expand="lg" className="w-75">
       <Link className="nav-link navbar-brand" aria-current="page" to="/#">
                    <img  src="/Images/LogoIcon.png" width="60px" height="60px"  alt="logoo"/></Link>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     
    </Nav>
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
            ):(<div style={{color:"white"}} className="d-flex mt-2">
            <div className="mr-3"><img className="rounded-circle" src={person.img} width="60px" height="60px" alt="er"/></div>
              <div className="d-flex flex-row align-items-center  ">
              <div className="mr-3 ">
                <p className="m-0">{person && person.name}</p>
                <p className="m-0">{person && person.email}</p>
    </div>
                <Button variant="warning" className="btn btn-dark nav-btn btn-round register-btn" onClick={logout}>Logout</Button>
              </div>
            </div>)}
                
            </div>
  </Navbar.Collapse>
</Navbar>

</div>  
    )
}

export default Header
