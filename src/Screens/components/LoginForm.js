import React, {  useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, firestore ,firebase} from '../../firebase'


function LoginForm({person,setlogin}) {

      var [user ,setuser]=useState({
        Name:"",
        
        pass:"",
        rememberme:false,
        showPass:false
    }),
    history=useHistory(),
    [errors,seterrors]=useState([]),
     [loading , setloading]=useState(false),
  
    inputChange=(e)=>{
        var {name,value}=e.target
        setuser((p)=>{
            return{
                ...p,
                [name]:value
            }
        })
    } ,
    selectChange=(e)=>{
        var {name,checked}=e.target
        setuser((p)=>{
            return{
                ...p,
                [name]:checked
            }
        })
    },
    loginuser= async(e)=>{
        e.preventDefault()
          let error=[]
          setlogin(false)
  setloading(true)
  let email=""
if(user.Name===""){error.push({Nameempty:true})}else{
    var ref=firestore.collection("users").doc(user.Name)
var doc=await ref.get()

if(!doc.exists){
    error.push({Namenotvalid:true})
}
else{
    
    email=doc.data().email
  
}

}
if(user.pass===""){error.push({passempty:true})}

if(error.length>0){
     seterrors(error)
    setloading(false)
}else{
    auth.setPersistence( user.rememberme? firebase.auth.Auth.Persistence.LOCAL:firebase.auth.Auth.Persistence.SESSION).then(()=>{
         auth.signInWithEmailAndPassword(email, user.pass)
  .then((userCredential) => {
    // Signed in
     setloading(false)
   setlogin(true)
    history.push("/")
     
    // ...
  })
  .catch((err) => {
          

         setloading(false)
        
         if(err.code==="auth/wrong-password"){ seterrors((p)=>{
             return [{passnotvalid:true}]
         })}else{
              seterrors([])
         }
         
  
  });

    }).catch(e=>{
        console.log(e);
    })

   
}
    }

 
    return (
        <>
        {person &&( <div>Already login</div>)}
        {!person &&(   <form onSubmit={loginuser}>
                    <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                    <div className="form__group field w-100 px-5">
                        <input type="input" className="form__field" placeholder="Username" value={user.Name} onChange={inputChange} name="Name" id='name'  />
                        <label htmlFor="name" className="form__label">Username</label>
                         {errors && errors.map(({Nameempty},index)=>{
                               
                                if(Nameempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter Username</span>
                                } 
                                 return null
                               
                            })}
                             {errors && errors.map(({Namenotvalid},index)=>{
                               
                                if(Namenotvalid){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Your username invalid</span>
                                } 
                                 return null
                               
                            })}
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3 mb-4">
                    <div className="form__group field w-100 px-5">
                        <input type={user.showPass ?"text":"password"} className="form__field" placeholder="Password" name="pass" id='pass' value={user.pass} onChange={inputChange}  />
                        <label htmlFor="name" className="form__label">Password</label>
                             {errors && errors.map(({passempty},index)=>{
                               
                                if(passempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter Password</span>
                                } 
                                 return null
                               
                            })}   
                             {errors && errors.map(({passnotvalid},index)=>{
                               
                                if(passnotvalid){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Password is not valid</span>
                                } 
                                 return null
                               
                            })}
                    </div>
                    </div>
                    
                    <div className="col-6 d-flex justify-content-end">
                        <label className="checkbox path">
                            <input type="checkbox" name="showPass" value={user.showPass} checked={user.showPass} onChange={selectChange}/>
                            <svg viewBox="0 0 21 21">
                                <path
                                    d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                                </path>
                            </svg>
                        </label>
                        <label className=" mx-1 che-label">Show Password</label>
                    </div>
                    
                    <div className="col-6 d-flex justify-content-start">
                    <label className="checkbox path">
                        <input type="checkbox" name="rememberme" value={user.rememberme} checked={user.rememberme} onChange={selectChange}/>
                        <svg viewBox="0 0 21 21">
                            <path
                                d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                            </path>
                        </svg>
                    </label>
                    <label className=" mx-1 che-label" >Remember Me</label>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-4 mb-5"><button type="submit" className="btn btn-box rounded-pill w-25" disabled={loading}>{loading?"Processing..":"Login"}</button>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-5">
                        <div className="create-account"><p><Link to="/register" data-bs-toggle="modal" data-bs-target="#Register" data-bs-dismiss="modal">Create Account</Link></p></div>
                    </div>
                    <div className="col-12 d-flex justify-content-center text-success">
                        <div className="create-account forget-pass">
                            <p><Link to="/forgetpassword" className="text-success">Forgot Password?</Link></p>
                        </div>
                    </div>
                    </div>
                </form> )}
         
                </>
    )
}

export default LoginForm
