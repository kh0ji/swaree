import React, { useState } from 'react'
import { auth } from '../../firebase';

function ForgetPassword() {
var [email,setemail]=useState("")
var [err,seterr]=useState([])
var [emailsend,setemailsend]=useState(false)

var forgetPass=(e)=>{
      setemailsend(false)
  e.preventDefault()
    let errorr=[]
if(email===""){errorr.push({passempty:true})}
if(errorr.length>0){
    seterr(errorr)
}else{

auth.sendPasswordResetEmail(email)
  .then(() => {
    setemailsend(true)
  })
  .catch((error) => {
 
    if(error.code==="auth/user-not-found"){

errorr.push({invalidemail:true})
seterr(errorr)

      
        }
  });
}


}

    return (
        <>
             {emailsend && (   <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Dear User!</strong> Check Email.
  <button type="button" className="close" onClick={()=>{
setemailsend(false)
  }} data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>)}
         <form action="" onSubmit={forgetPass}>
        
                    <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <div className="forget-info "><p>Lost your password? Please enter your username or email address.
                        You will receive a link to create a new password via email.</p></div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                    <div className="form__group field w-100 px-0 px-lg-5 px-sm-5">
                        <input type="email" className="form__field" placeholder="Username" name="email" id='name' value={email} onChange={(e)=>{
                            setemail(e.target.value)
                        }} />
                        <label htmlFor="name" className="form__label">Email Address</label>  
                         {err && err.map(({invalidemail},index)=>{
                               
                                if(invalidemail){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Your eamil not register</span>
                                } 
                                 return null
                               
                            })}
                             {err && err.map(({passempty},index)=>{
                               
                                if(passempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter email</span>
                                } 
                                 return null
                               
                            })}
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-4 mb-5"><button type="submit" className="btn btn-box-green rounded-pill w-50">Reset Password</button>
                    </div>
                    
                    </div>
                </form>
                </>
    )
}

export default ForgetPassword
