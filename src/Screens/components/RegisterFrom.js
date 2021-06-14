import React, { useCallback,  useState } from 'react'
import { Form } from 'react-bootstrap';
import {auth,firestore,storage} from "../../firebase"
function RegisterFrom({person,setreg}) {
    var [user ,setuser]=useState({
        Name:"",
        email:"",
        pass:"",
        conf:false
    }),
    [errors,seterrors]=useState([]),
    [file,setfile]=useState([]),
    [cls,setcls]=useState(""),
    
    [loading,setloading]=useState(false),

    inputchange=useCallback((e)=>{
        var {value, name}=e.target
setuser((p)=>{
    return{
        ...p,
        [name]:value
    }
})
},[]),

selectchange=useCallback((e)=>{
var {checked, name}=e.target
setuser((p)=>{
    return{
        ...p,
        [name]:checked
    }
})
},[]),
 validateEmail=(email)=> {
     //eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
},
    
   fetchimg = async (acceptedFiles) => {
      var promise = await new Promise(async (r, eror) => {
        var array = [];
        for (var i = 0; i < Array.from(acceptedFiles).length; i++) {
          try {
            
            let bucketName = "Images";
            var filename = Array.from(acceptedFiles)[i].name.split(".");
            var ext = filename[filename.length - 1];
            let storageRef = storage
              .ref(`${bucketName}/${Date.now()}.${ext}`);
            let upload = await storageRef.put(Array.from(acceptedFiles)[i]);
            
            const downloadURL = await upload.ref.getDownloadURL();
            array.push(downloadURL);
          } catch (error) {
            eror(error);
          }
        }
        r(array);
      });

      return promise;
    },

saveUser= async(e)=>{
e.preventDefault()
  let error=[]
   setreg(false)
  setloading(true)
if(user.Name===""){error.push({Nameempty:true})}else{
    var ref=firestore.collection("users").doc(user.Name)
var doc=await ref.get()

if(doc.exists){
    error.push({Namealready:true})
}
}
if(user.email===""){error.push({emailempty:true})}else if(validateEmail(user.email)!==true) {error.push({invalidemail:true})}else{
        var eref=firestore.collection("users")
var edoc=await eref.where("email","==",user.email).get()

if(!edoc.empty){
    error.push({eamilalready:true})
}
}
if(user.pass===""){error.push({passempty:true})}else if(user.pass.length <6){ error.push({passinvalid:true})}
if(file.length<1){error.push({fileempty:true})}
if(!user.conf){error.push({confempty:true})}

if(error.length>0){
    
    seterrors(error)
    setloading(false)
    error.forEach(({confempty},index)=>{
    
    
    if(confempty){
        setcls("text-danger")
    }else{
        setcls("")
    }
})
}else{
    setcls("")
    seterrors([])
    var img=await fetchimg(file)
     
    firestore.collection("users").doc(user.Name.toLowerCase()).set({
        Name:user.Name,
        email:user.email,
        pass:user.pass,
        img:img[0]
    }).then(()=>{
  auth.createUserWithEmailAndPassword(user.email,user.pass).then((user)=>{

 setloading(false)
 setreg(true)
    }).catch((e)=>{
        console.log(e);
         setloading(false)
      
    })
    }).catch((e)=>{
        console.log(e);
         setloading(false)
    })
  


}
}
 
   
 
    return (
        <>
           {person &&( <div>Already login</div>)}
           {!person &&( <form action="" onSubmit={saveUser}>
                    <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center" >
                    <div className="form__group field w-100 px-5" >
                        <input type="input" className="form__field" value={user.Name} onChange={inputchange} placeholder="Username" name="Name" id='name'  />
                        <label htmlFor="name" className="form__label" >Username</label>
                          {errors && errors.map(({Nameempty},index)=>{
                               
                                if(Nameempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter Username</span>
                                } 
                                 return null
                               
                            })}
                            {errors && errors.map(({Namealready},index)=>{
                               
                                if(Namealready){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Username already in use</span>
                                } 
                                 return null
                               
                            })}
                    </div>
                   
                    </div>
                      
                    <div className="col-12 d-flex justify-content-center mt-3 mb-4">
                        <div className="form__group field w-100 px-5">
                            <input type="email" className="form__field" placeholder="email" name="email" id='address' value={user.email} onChange={inputchange} />
                            <label htmlFor="name" className="form__label">Email Address</label>
                              {errors && errors.map(({emailempty},index)=>{
                               
                                if(emailempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please Enter email address</span>
                                }
                                 return null
                               
                            })} 
                              {errors && errors.map(({invalidemail},index)=>{
                               
                                if(invalidemail){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please Enter valid email address</span>
                                }
                                 return null
                               
                            })}
                               {errors && errors.map(({eamilalready},index)=>{
                               
                                if(eamilalready){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>email already in use</span>
                                } 
                                 return null
                               
                            })}
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="password" className="form__field" placeholder="Password" name="pass" id='password' value={user.pass} onChange={inputchange} />
                        <label htmlFor="name" className="form__label">Password</label>
                         {errors && errors.map(({passempty},index)=>{
                               
                                if(passempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please Enter password</span>
                                }
                                 return null
                               
                            })}
                               {errors && errors.map(({passinvalid},index)=>{
                               
                                if(passinvalid){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Password should be at least 6 characters</span>
                                } 
                                 return null
                               
                            })}
                    </div>
                    </div>
                 
  <Form.Group className="w-75 " style={{color:"#198754"}}>
    <Form.File id="exampleFormControlFile1" label="Profile pic:"  accept="image/*" onChange={(e)=>{
       
        setfile(e.target.files)
      
    }} />
  </Form.Group>
   {errors && errors.map(({fileempty},index)=>{
                               
                                if(fileempty){
                                    return <span key={index} className="w-100 text-danger ml-5 pl-4" style={{fontSize:".8em"}}>Please upload profile image</span>
                                } 
                                 return null
                               
                            })}
                    <div className="col-12 d-flex justify-content-center w-100 pt-2">
                        <div className="condition px-5">
                            <p>Your personal data will be used to support your experience
                            throughout this website, to manage access to your account, and
                            for other purposes described in our privacy policy.</p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-start ml-5 pl-5 mt-3">
                        <label className="checkbox path">
                            <input type="checkbox" checked={user.conf} name="conf" onChange={selectchange}/>
                            <svg viewBox="0 0 21 21">
                                <path
                                    d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                                </path>
                            </svg>
                        </label>
                        <label className= {`mx-1 che-label ${ cls}`} >I’ve read and accept the terms & conditions *</label>
                       
                    </div>
                    
    
                    <div className="col-12 d-flex justify-content-center mt-4 mb-5"><button type="submit" disabled={loading?true:false} className="btn btn-box rounded-pill w-auto">{loading?"Processing..":"Register"}</button>
                    </div>
                    </div>
                </form>)}
         
                </>
    )
}

export default RegisterFrom
