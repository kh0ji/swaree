import React, { useEffect, useState } from 'react'
import "./form.scss"
import { Link, useParams } from 'react-router-dom'
import { firestore } from '../../firebase'
import { Modal ,Button} from "react-bootstrap"

function RequestRiderForm({person}) {
var  MyVerticallyCenteredModal=(props)=>{
  return (
    <Modal
      {...props}
    
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Rider Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <p>
        {`My phone number is ${rider.phone}.You can contact me`}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
},
        tConvert =(time)=> {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
},
 params=useParams(),
 [modalShow, setModalShow] = useState(false),
[rider,setrider]=useState({})
    useEffect(()=>{

    firestore.collection("riders").doc(params.id).get().then((rid)=>{

        setrider(rid.data())
      
    })  
    },[params.id])
   console.log(rider);
    return (
        <>

          {!person && <div>Please <Link to="/login" className="text-success">Login</Link> First</div>}
          {person && (   <div className="container p-5">
          <div  className=" p-4 riderformbox w-50 mx-auto ">
                 <div className="rounded-circle formBox  ">
                 <div className="profile-img"><img src={rider.riderImg && rider.riderImg} alt="drivernae" width="100px" height="100px" className="rounded-circle "/></div>
                   <form action="" className="RRF mt-5">
                    <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center mb-3 profile">
                   <h1>Driver Name</h1>
                   <p>{rider.Name && rider.Name}</p>
                    </div>
                     <div className="col-12 d-flex flex-column justify-content-center align-items-center mb-3 profile">
                   <h1>Car Name</h1>
                   <p>{rider.carName && rider.carName}</p>
                    </div>
                    <div className="col-12 d-flex justify-content-center  mb-3">
                      <div className="col-12 d-flex flex-column justify-content-center align-items-center mb-3 profile">
                   <h1>Route</h1>
                   <p>{`${rider.depCity && rider.depCity} to ${rider.arriCity && rider.arriCity}`}</p>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center mb-3 profile">
                   <h1>Departure Date & time</h1>
                   <p>{`${rider.depDate && rider.depDate} / ${rider.depTime && tConvert(rider.depTime) }`}</p>
                    </div>
                    </div>
                     <div className="col-12 d-flex justify-content-center mb-3">
                     <div className="col-12 d-flex flex-column justify-content-center align-items-center mb-3 profile">
                   <h1>Fair</h1>
                   <p>{rider.Fair && rider.Fair} Rs</p>
                    </div>
                    </div> 
                   
                  
                 
                    
    
                    <div className="col-12 d-flex justify-content-center mt-4 mb-5"><button type="button" className="btn btn-box rounded-pill w-auto bg-white text-success font-weight-bold p-2"  onClick={() => setModalShow(true)}>Request a Ride</button>
                    </div>
                    </div>
                </form>
                </div>
                </div>
               </div>)}
  <MyVerticallyCenteredModal
       show={modalShow}
        onHide={() => setModalShow(false)}
  />
               </>
      
    )
}

export default RequestRiderForm
