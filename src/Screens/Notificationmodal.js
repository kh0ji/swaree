import React from 'react'
import { useState } from 'react'
import { Modal,Button ,Form} from 'react-bootstrap'
import { database } from '../firebase'

function Notificationmodal({setsinglenoti,person,singlenoti,show,onHide}) {
var [value,setvalue]=useState({
  status:"",
  msg:""
})
var [errors,seterrors]=useState([])
var inputchange=(e)=>{
var {value,name}=e.target
setvalue((p)=>({...p,[name]:value}))

}
var changestatus=(e)=>{
e.preventDefault()
seterrors([])
let error=[]
   if(value.status===""){error.push({statusempty:true})}
   if(value.msg===""){error.push({msgempty:true})}

   if(error.length){
     seterrors(error)
   }else{
     database.ref("users").child(singlenoti.id).update({
      status:value.status,
      tomsg:value.msg
     }).then(()=>{
       setsinglenoti((p)=>({...p,status:value.status, tomsg:value.msg}))
     })
   }
}
if(person && person.email){
if(singlenoti.from===person.email){
  return(
<Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Request Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <ul style={{listStyle:"none"}}>
         <li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>Rider Name:</h1>
         <p> {singlenoti.toname}</p>
         </li> 
         <li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>Rider email:</h1>
         <p> {singlenoti.to}</p>
         </li>
         <li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>Your Msg:</h1>
         <p> {singlenoti.frommsg}</p>
         </li>
         <li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>Status:</h1>
         <p> {singlenoti.status}</p>
         </li> 
         {singlenoti.tomsg && (
<li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>rider Msg:</h1>
         <p> {singlenoti.tomsg}</p>
         </li>
         )}
         
       </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
  
}
else{
  return(
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Client Information
        </Modal.Title>
      </Modal.Header>
    <Modal.Body>
       <ul style={{listStyle:"none"}}>
         <li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>Client Name:</h1>
         <p> {singlenoti.fromname}</p>
         </li> 
         <li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>Client email:</h1>
         <p> {singlenoti.from}</p>
         </li>
         <li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>Client Msg:</h1>
         <p> {singlenoti.frommsg}</p>
         </li>
         <li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>Client number:</h1>
         <p> {singlenoti.fromnumber}</p>
         </li>
         <li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>Status:</h1>
         <p> {singlenoti.status}</p>
         </li> 
         {singlenoti.tomsg && (
<li>
           <h1 style={{fontSize:"1em",fontWeight:"600"}}>Your Msg:</h1>
         <p> {singlenoti.tomsg}</p>
         </li>
         )}
         
       </ul>

       {singlenoti.status==="pending" && (
   <Form onSubmit={changestatus}>


   <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Update status</Form.Label>
    <Form.Control as="select" name="status" value={value.status} onChange={inputchange}>
      <option value="">Choose..</option>
      <option value="accepted">Accepted</option>
      <option value="rejected">Rejected</option>
   
    </Form.Control>
    {errors && errors.map(({statusempty},index)=>{
                               
    if(statusempty){
        return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Select you Status</span>
    } 
      return null
    
})}
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Short Message for Client</Form.Label>
      <Form.Control as="textarea" rows={3} name="msg" value={value.msg} onChange={inputchange}/>
       {errors && errors.map(({msgempty},index)=>{
                               
    if(msgempty){
        return <span key={index} className="w-100 text-danger " style={{fontSize:".8em"}}>Enter short message for client</span>
    } 
      return null
    
})}
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
       )}
    
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
}else{
  return null
}


      
}

export default Notificationmodal
