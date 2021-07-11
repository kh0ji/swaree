import React, {  useState } from 'react'
import {Form} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { firestore } from '../../firebase'
import { fetchimg } from '../../FirebaseFuctions'



function Riderform({person}) {

    var [rider,setrider]=useState({
        Name:"",
        carName:"",
        depCity:"",
        arriCity:"",
        depTime:"",
        depDate:"",
        Fair:"",
        phone:"",
        riderImg:"",
        riderCarImg:"",
        conf:false

    }),
        [errors,seterrors]=useState([]),
        [cls,setcls]=useState(""),
        [riderposted,setriderposted]=useState(false),
        [loading,setloading]=useState(false),
       
    saveRider=async (e)=>{
        e.preventDefault()
           let error=[]
           setloading(true)
        if(rider.Name===""){error.push({Nameempty:true})}else{
            var ref=firestore.collection("riders").doc(rider.Name),
            doc=await ref.get()
            
            if(doc.exists){
                error.push({Namealready:true})
            }
            
    }
        if(rider.carName===""){error.push({carNameempty:true})}
        if(rider.arriCity===rider.depCity){error.push({changarr:true})}
        if(rider.depCity===""){error.push({depCityempty:true})}
        if(rider.arriCity===""){error.push({arriCityempty:true})}
        if(rider.depTime===""){error.push({depTimeempty:true})}
        if(rider.depDate===""){error.push({depDateempty:true})}
        if(rider.Fair===""){error.push({Fairempty:true})}
        if(rider.phone===""){error.push({phoneempty:true})}
        if(rider.riderImg===""){error.push({riderImgempty:true})}
        if(rider.riderCarImg===""){error.push({riderCarImgempty:true})}
        if(!rider.conf){error.push({confempty:true})}
        if(error.length>0){
setloading(false)
             seterrors(error)
                error.forEach(({confempty},index)=>{
    
    
    if(confempty){
        setcls("text-danger")
    }else{
        setcls("")
    }
})
        }
        else{

    setcls("")
    seterrors([])
     setriderposted(false)
             var riderimg=await fetchimg(rider.riderImg)
             var ridercarimg=await fetchimg(rider.riderCarImg)

           
            firestore.collection("riders").doc(rider.Name.replace(/ +/g, "")).set({
        Name:rider.Name,
        carName:rider.carName,
        depCity:rider.depCity,
        arriCity:rider.arriCity,
        depTime:rider.depTime,
        depDate:rider.depDate,
        Fair:rider.Fair,
        phone:rider.phone,
        riderImg:riderimg[0],
        riderCarImg:ridercarimg[0],
        available:true,
        email:person.email
            }).then(()=>{
                setriderposted(true)
                setloading(false)
                setrider({
                    Name:"",
                    carName:"",
                    depCity:"",
                    arriCity:"",
                    depTime:"",
                    depDate:"",
                    Fair:"",
                    phone:"",
                    riderImg:"",
                    riderCarImg:"",
                    conf:false
                })
            }).catch(e=>{
                 setloading(false)
                console.log(e);
            })
        }
    },
    inputChange=(e)=>{
        var {value,name}=e.target
        setrider((p)=>{
            return{
                ...p,
                [name]:value
            }
        })
    } ,
    selectChange=(e)=>{
          var {checked,name}=e.target
        setrider((p)=>{
            return{
                ...p,
                [name]:checked
            }
        })
    },
    fileChange=(e)=>{
        var {files,name}=e.target
        setrider((p)=>{
            return{
                ...p,
                [name]:files
            }
        })
    }
   function mindate(){
   var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var maxDate = year + '-' + month + '-' + day;
  return maxDate
}

    return (
        <>
        {!person && <div>Please <Link to="/login" className="text-success">Login</Link> First</div>}
         {person &&(    
             
             <>
             {riderposted && (   <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Dear Rider!</strong> Your ride is posted.
  <button type="button" className="close" onClick={()=>{
setriderposted(false)
  }} data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>)}
          
             <form action="" onSubmit={saveRider}>
                    <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                    <div className="form__group field w-100 px-5">
                        <input type="input" className="form__field" placeholder="Your Name" name="Name" id='name' value={rider.Name} onChange={inputChange} />
                        <label htmlFor="name" className="form__label">Your Name</label>
                          {errors && errors.map(({Nameempty},index)=>{
                               
                                if(Nameempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter your Name</span>
                                } 
                                 return null
                               
                            })}
                            {errors && errors.map(({Namealready},index)=>{
                               
                                if(Namealready){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>enter Name is already inuse</span>
                                } 
                                 return null
                               
                            })}
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3 mb-4">
                        <div className="form__group field w-100 px-5">
                            <select type="text" className="form__field" placeholder="Car Name & Model" name="carName" id='Car Name & Model' value={rider.carName} onChange={inputChange} >
                                <option value="">Select Car</option>
                                <option value="sazuki">sazuki</option>
                                <option value="Mehran">Mehran</option>
                                <option value="Honda Civic">Honda Civic</option>
                                <option value="Vitz">Vitz</option>
                                <option value="Cultus">Cultus</option>
                            </select>
                            <label htmlFor="Car Name & Model" className="form__label">Car Name & Model</label>
                              {errors && errors.map(({carNameempty},index)=>{
                               
                                if(carNameempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter Car name</span>
                                } 
                                 return null
                               
                            })}
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-4">
                        <div className="form__group field w-100 px-5">
                            <input type="number" className="form__field" placeholder="Phone number" name="phone" id='Phone number'  value={rider.phone} onChange={inputChange} />
                            <label htmlFor="Car Name & Model" className="form__label">Phone</label>
                             {errors && errors.map(({phoneempty},index)=>{
                               
                                if(phoneempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter Phone</span>
                                } 
                                 return null
                               
                            })}
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="text" className="form__field" placeholder="Departure City" name="depCity" id='Departure City'  value={rider.depCity} onChange={inputChange} />
                         
                        <label htmlFor="Departure City" className="form__label">Departure City</label>
                         {errors && errors.map(({depCityempty},index)=>{
                               
                                if(depCityempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter Departure City</span>
                                } 
                                 return null
                               
                            })}
                    </div>
                    </div>
                     <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input  className="form__field" placeholder="Arrival City" name="arriCity" id='Arrival City'  value={rider.arriCity} onChange={inputChange} />

                        <label htmlFor="Arrival City" className="form__label">Arrival City</label>
                         {errors && errors.map(({arriCityempty},index)=>{
                               
                                if(arriCityempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter Arrival City</span>
                                } 
                                 return null
                               
                            })}{errors && errors.map(({changarr},index)=>{
                               
                                if(changarr){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter different Arrival City</span>
                                } 
                                 return null
                               
                            })}
                    </div>
                    </div> 
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="date" className="form__field" mindate={new Date()} placeholder="Departure Date" name="depDate" id='Departure Date'  value={rider.depDate} onChange={inputChange}  min={mindate()} />
                        <label htmlFor="Departure Date" className="form__label">Departure Date</label>
                         {errors && errors.map(({depDateempty},index)=>{
                               
                                if(depDateempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter Departure Date</span>
                                } 
                                 return null
                               
                            })}
                    </div>

                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="time" className="form__field" placeholder="Departure Time" name="depTime" id='Departure Time' value={rider.depTime} onChange={inputChange}  />
                        <label htmlFor="Departure Time" className="form__label">Departure Time</label>
                           {errors && errors.map(({depTimeempty},index)=>{
                               
                                if(depTimeempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter Departure Time</span>
                                } 
                                 return null
                               
                            })}
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="number" className="form__field" placeholder="Fair" name="Fair" id='Fair'  value={rider.Fair} onChange={inputChange}  />
                        <label htmlFor="Fair" className="form__label">Fair</label>
                           {errors && errors.map(({Fairempty},index)=>{
                               
                                if(Fairempty){
                                    return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Please enter fair</span>
                                } 
                                 return null
                               
                            })}
                    </div>
                    </div>
                     <Form.Group className="w-75">
                        <Form.File id="exampleFormControlFile1" style={{color:"#198754"}} label="Your Image (we used in your profile)" name="riderImg" onChange={fileChange}/>
                    </Form.Group>
                      {errors && errors.map(({riderImgempty},index)=>{
                               
                                if(riderImgempty){
                                    return <span key={index} className="w-100 text-danger ml-5 pl-4" style={{fontSize:".8em"}}>Please upload your Image</span>
                                } 
                                 return null
                               
                            })}
                       <Form.Group className="w-75">
                        <Form.File id="exampleFormControlFile2" style={{color:"#198754"}} label="Your Car image (we used in your profile)" name="riderCarImg" onChange={fileChange}/>
                    </Form.Group>
                    {errors && errors.map(({riderCarImgempty},index)=>{
                               
                                if(riderCarImgempty){
                                    return <span key={index} className="w-100 text-danger ml-5 pl-4" style={{fontSize:".8em"}}>Please upload your car Image</span>
                                } 
                                 return null
                               
                            })}
                    <div className="col-11 d-flex justify-content-start ml-5 mt-3">
                        <label className="checkbox path">
                            <input type="checkbox" name="conf" checked={rider.conf} onChange={selectChange}/>
                            <svg viewBox="0 0 21 21">
                                <path
                                    d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                                </path>
                            </svg>
                        </label>
                       
                        <label className={` mx-1 che-label ${cls} `}>All the Information is Correct<span className="text-danger"> *</span></label>
                    </div>
                    
    
                    <div className="col-12 d-flex justify-content-center mt-4 mb-5"><button type="submit" className="btn btn-box-green rounded-pill w-auto" disabled={loading}> {loading?"Proccesing..":"Post my Ride"}</button>
                    </div>
                    </div>
                </form>
                </>)}
                </>
      
    )
}

export default Riderform
