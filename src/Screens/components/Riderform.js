import React from 'react'
import {Form} from "react-bootstrap"
function Riderform() {
    return (
         <form action="">
                    <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                    <div className="form__group field w-100 px-5">
                        <input type="input" className="form__field" placeholder="Your Name" name="name" id='name' required />
                        <label htmlFor="name" className="form__label">Your Name</label>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3 mb-4">
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
                        <input type="password" className="form__field" placeholder="Departure Date" name="name" id='Departure Date' required />
                        <label htmlFor="Departure Date" className="form__label">Departure Date</label>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="password" className="form__field" placeholder="Departure Time" name="name" id='Departure Time' required />
                        <label htmlFor="Departure Time" className="form__label">Departure Time</label>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="password" className="form__field" placeholder="Fair" name="name" id='Fair' required />
                        <label htmlFor="Fair" className="form__label">Fair</label>
                    </div>
                    </div>
                     <Form.Group className="w-75">
                        <Form.File id="exampleFormControlFile1" style={{color:"#198754"}} label="Your Image (we used in your profile)" />
                    </Form.Group>
                       <Form.Group className="w-75">
                        <Form.File id="exampleFormControlFile1" style={{color:"#198754"}} label="Your Car image (we used in your profile)" />
                    </Form.Group>
                    <div className="col-12 d-flex justify-content-start ml-5 pl-5 mt-3">
                        <label className="checkbox path">
                            <input type="checkbox"/>
                            <svg viewBox="0 0 21 21">
                                <path
                                    d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                                </path>
                            </svg>
                        </label>
                       
                        <label className=" mx-1 che-label">All the Information is Correct<span className="text-danger"> *</span></label>
                    </div>
                    
    
                    <div className="col-12 d-flex justify-content-center mt-4 mb-5"><button type="button" className="btn btn-box rounded-pill w-auto">Post my Ride</button>
                    </div>
                    </div>
                </form>
    )
}

export default Riderform
