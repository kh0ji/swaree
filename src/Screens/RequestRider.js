import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./RequestRider.scss"

function RequestRider(props) {
    return (
       <Container fluid>
           <Row className="pt-5">
               <Col lg={12} className="p-0">
                   <div className=" ridermainheading "><h1>Available Rides</h1></div>
               </Col>
               <Col lg={12} className="mt-5">
              
                <div  className=" p-4 riderformbox mx-auto ">
                 <div className="rounded-circle  ridertopcircle"></div>
                     {props.children}
                </div>
               </Col>
           </Row>
       </Container>
    )
}

export default RequestRider
