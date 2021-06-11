import React from 'react'
import {Card,ListGroup,ListGroupItem} from "react-bootstrap"
import {Link} from "react-router-dom"
function RiderCard({id}) {
    return (
        <Link to={`/requestrider/${id}`} className="text-dark">
       <Card style={{ width: '18rem' ,marginTop:"10px"}}>
  <Card.Img variant="top" src="https://picsum.photos/200/300"  height="200px" width="80px"/>
  <Card.Body>
    <Card.Title style={{color:"#198754"}}>Ahmed</Card.Title>
    <Card.Text>
      Lamborghini Murciélago
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>From: <span style={{color:"#198754"}}>Faisalabad</span> To: <span style={{color:"#198754"}}>Lahore</span></ListGroupItem>
    <ListGroupItem>Departure Date: <span style={{color:"#198754"}}>6/11/2021</span></ListGroupItem>
    <ListGroupItem>Departure Time: <span style={{color:"#198754"}}>5:26 PM</span></ListGroupItem>
  </ListGroup>
  
</Card>
</Link>
    )
}

export default RiderCard
