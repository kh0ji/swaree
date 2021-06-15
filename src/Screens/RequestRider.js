import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RiderCard from './components/RiderCard'
import "./RequestRider.scss"
import { Link } from 'react-router-dom'
import { firestore } from '../firebase'
function RequestRider({person}) {

    var [riders,setriders]=useState([])
    useEffect(()=>{
      var fetchdata=async()=>{
  var ref = firestore.collection("riders"),
    doc=await ref.get()
   
    setriders(doc.docs)
      }
      fetchdata()

    })
    return (
        <>
               <Container fluid>
           <Row className="pt-5">
               <Col lg={12} className="p-0">
                   <div className=" ridermainheading "><h1>Available Rides</h1></div>
               </Col>
               {!person && <div className="w-100 text-center bg-white">Please <Link to="/login" className="text-success">Login</Link> first to see riders</div>}
           {person && ( 
               <Col lg={12} className="mt-5 ">
              <Row className="d-flex justify-content-lg-around p-4">


                {
                    riders.map((rider,index)=>{
                        return(
                <RiderCard key={index} data={rider.data()} id={rider.id}/>
                    )
                    })
                }
                
              
              </Row>
               
                

               </Col>
               )}
           </Row>
       </Container>
  
       </>
    )
}

export default RequestRider
