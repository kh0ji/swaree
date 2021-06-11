import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RiderCard from './components/RiderCard'
import "./RequestRider.scss"

function RequestRider(props) {
    return (
       <Container fluid>
           <Row className="pt-5">
               <Col lg={12} className="p-0">
                   <div className=" ridermainheading "><h1>Available Rides</h1></div>
               </Col>
               <Col lg={12} className="mt-5 ">
              <Row className="d-flex justify-content-between p-4">
                   <RiderCard id={1}/>
                <RiderCard id={1}/>
                <RiderCard id={1}/>
                <RiderCard id={1}/>
                <RiderCard id={1}/>
                <RiderCard id={1}/>
              </Row>
               
                

               </Col>
           </Row>
       </Container>
    )
}

export default RequestRider
