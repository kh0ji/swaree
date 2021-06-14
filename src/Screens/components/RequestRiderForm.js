import React, { useEffect } from 'react'
import "./form.scss"
import { Link } from 'react-router-dom'
function RequestRiderForm({person}) {

   
    return (
        <>

          {!person && <div>Please <Link to="/login" className="text-success">Login</Link> First</div>}
          {person && (   <div className="container p-5">
          <div  className=" p-4 riderformbox w-50 mx-auto ">
                 <div className="rounded-circle formBox  ">
                 <div className="profile-img"><img src="https://picsum.photos/200/300" alt="drivernae" width="100px" height="100px" className="rounded-circle"/></div>
                   <form action="" className="RRF mt-5">
                    <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="input" className="form__field" placeholder="Driver Name" name="name" id='name' required />
                        <label htmlFor="name" className="form__label text-center">Driver Name</label>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center  mb-3">
                        <div className="form__group field w-100 px-5">
                            <input type="email" className="form__field" placeholder="Car Name & Model" name="name" id='Car Name & Model' required />
                            <label htmlFor="Car Name & Model" className="form__label">Car Name & Model</label>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="password" className="form__field" placeholder="Departure City" name="name" id='Departure City' required />
                        <label htmlFor="Departure City" className="form__label">Departure City</label>
                    </div>
                    </div>
                     <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="password" className="form__field" placeholder="Arrival City" name="name" id='Arrival City' required />
                        <label htmlFor="Arrival City" className="form__label">Arrival City</label>
                    </div>
                    </div> 
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="date" className="form__field" placeholder="Departure Date" name="name" id='Departure Date' required />
                        <label htmlFor="Departure Date" className="form__label">Departure Date</label>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="time" className="form__field" placeholder="Departure Time" name="name" id='Departure Time' required />
                        <label htmlFor="Departure Time" className="form__label">Departure Time</label>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="password" className="form__field" placeholder="Fair" name="name" id='Fair' required />
                        <label htmlFor="Fair" className="form__label">Fair</label>
                    </div>
                    </div>
                   
                    
    
                    <div className="col-12 d-flex justify-content-center mt-4 mb-5"><button type="button" className="btn btn-box rounded-pill w-auto bg-white text-success font-weight-bold p-2">Request a Ride</button>
                    </div>
                    </div>
                </form>
                </div>
                </div>
               </div>)}
  
               </>
      
    )
}

export default RequestRiderForm
