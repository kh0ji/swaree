import React, { useEffect, useState } from 'react'
import "./Header.scss"
import {Link} from "react-router-dom"
import { Button,Navbar,Nav} from "react-bootstrap";
import { auth, database } from '../firebase';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Notificationmodal from './Notificationmodal';
function Header({person,setlogout}) {
    const [modalShow, setModalShow] = useState(false);
 var [noti,setnoti]=useState([])
 var [singlenoti,setsinglenoti]=useState({})
 var [notishow,setnotishow]=useState(false)
 var [notiicon,setnotiicon]=useState(true)

useEffect(() => {
if(person){

    

  const notiref=database.ref("users")

  notiref.on("child_changed",(snapshot)=>{
 
 
  
 

      if(snapshot.val().from===person.email){
        
      
  setnotiicon(false)
    
      }
  
  
     
  })
   notiref.on("child_added",(snapshot)=>{
 
 
  
 

      if(snapshot.val().to===person.email){
        
      
  setnotiicon(false)
    
      }
  
  
     
  })
  notiref.on("value",(snapshot)=>{
 
   
    let nofti=[]
    snapshot.forEach(snap=>{

      if(snap.val().from===person.email || snap.val().to===person.email){
        
       nofti.push({...snap.val(),id:snap.key})
  
    
      }
    
    })
    setnoti(nofti)
     
  })
}
return  
}, [person]) 
  

 var logout=()=>{
      setlogout(false)
     return auth.signOut().then((user) => {
         setlogout(true)
  return user
}).catch((error) => {
   return error
});
}
 
var showmodelnoti=(data)=>{
setsinglenoti(data)
setnotishow(false)
setModalShow(true)

}

    return (
       <div className="Header sticky-top d-flex justify-content-center">
       <Navbar expand="lg" className="w-75">
       <Link className="nav-link navbar-brand" aria-current="page" to="/#">
                    <img  src="/Images/LogoIcon.png" width="60px" height="60px"  alt="logoo"/></Link>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto text-white font-weight-bold">
     SWAREE | THE RIDE SHARING PLATFORM
    </Nav>
    <div className="position-relative">
     <IconButton aria-label="cart" onClick={()=>{
       setnotiicon(true)
       setnotishow((p)=>(!p))}} >
    <Badge color="secondary" style={{color:"white"}} variant="dot" invisible={notiicon}>
          <MailIcon />
        </Badge>
 </IconButton>
 {notishow && (
   <div className="notif">

{noti && noti.map((not,index)=>{

if(not.from===person.email){
  return (
     <button key={index} className="btn btn-dark w-100 mb-3" onClick={()=>showmodelnoti(not)}>
    <div  className="text-white ">your ride request to ({not.toname}) is {not.status}</div>
    </button>
  )
}
if(not.to===person.email){
   return (
     <button key={index} className="btn btn-dark w-100 mb-3"  onClick={()=>showmodelnoti(not)}>
    <div  className=" text-white">
      {not.fromname} send you a ride request
    </div>
    </button>
  )
}
return null
 
})}
{noti.length<1 &&(<p>no norification yet</p> )}
 
</div>
 )}


 </div>
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

<Notificationmodal
setsinglenoti={setsinglenoti}
person={person}
singlenoti={singlenoti}
  show={modalShow}
        onHide={() => setModalShow(false)}

/>
</div>  
    )
}

export default Header
