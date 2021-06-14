import React from 'react'
import {Card,ListGroup,ListGroupItem} from "react-bootstrap"
import {Link} from "react-router-dom"
function RiderCard({data,id}) {
  function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

    return (
        <Link to={`/requestrider/${id}`} className="text-dark">
       <Card style={{ width: '18rem' ,marginTop:"10px"}}>
  <Card.Img variant="top" src={data.riderCarImg}  height="200px" width="80px"/>
  <Card.Body>
    <Card.Title style={{color:"#198754"}}>{data.Name}</Card.Title>
    <Card.Text>
      {data.carName}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>From: <span style={{color:"#198754"}}>{data.depCity}</span> To: <span style={{color:"#198754"}}>{data.arriCity}</span></ListGroupItem>
    <ListGroupItem>Departure Date: <span style={{color:"#198754"}}>{data.depDate}</span></ListGroupItem>
    <ListGroupItem>Departure Time: <span style={{color:"#198754"}}>{tConvert(data.depTime)}</span></ListGroupItem>
  </ListGroup>
  
</Card>
</Link>
    )
}

export default RiderCard
