import React, { useEffect, useState } from 'react'
import { Form,Modal ,Button,Alert} from 'react-bootstrap'
import { database } from '../../firebase';
import {uuid} from "uuidv4"
function VModal({rideremail,ridername,person,show,onHide}) {

var [sending,setsending]=useState(false)
var [sended,setsended]=useState(false)

  var [req,setreq]=useState({
  from:"",
  to:"",
  frommsg:"",
  tomsg:"",
  fromnumber:"",
  toname:"",
  fromname:"",
  
  status:"pending"
}),

 [errors, seterrors] = useState([]);
  var sendreq=(e)=>{
    e.preventDefault()
   setsending(true)
   setsended(false)
    seterrors([])

database.ref("users/").get().then(doc=>{

  let error=[]
 setsending(true)
doc.forEach(key=>{
  if(key.val().to===req.to && key.val().from===req.from  && key.val().status==="pending"){

    
 error.push({alreadyinpro:true})
  }else if(key.val().to===req.to  && key.val().from===req.from &&   key.val().status==="rejected"){
 error.push({alreadyreject:true})
  }else if(key.val().to===req.to  && key.val().from===req.from  && key.val().status==="accepted"){
 error.push({alreadyaccp:true})
  }
 
  
  
 })
 


    if(req.fromnumber===""){error.push({numberempty:true})}
    if(req.frommsg===""){error.push({msgempty:true})}

  if(error.length){
      setsending(false)
      seterrors(error)
  
    }else{
     setsending(false)
   database.ref('users/'+ uuid()).set(req)
   setsended(true)
    }

})

  
  }



useEffect(() => {
setreq((p)=>({...p, 
  from:person && person.email,
  toname:ridername,
   fromname:person && person.name,
  to:rideremail}))

}, [person,rideremail,ridername])

  console.log(sending);
  return (
  <Modal
      
    show={show}
    onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Send Request
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Form onSubmit={sendreq}>
        {errors && errors.map(({rejected},index)=>{
                               
        if(rejected){
            return <Alert key={index} variant={"danger"}>
    Your request already rejected
  </Alert>
            
        } 
          return null
        
    })} 
    {errors && errors.map(({alreadyinpro},index)=>{
                               
        if(alreadyinpro){
            return <Alert key={index} variant={"info"}>
    Your request already inprogress
  </Alert>
            
        } 
          return null
        
    })} 
   
      {sended && (
        
    <Alert variant={"success"}>
    Your request send Successfully
  </Alert>)} 
            
    
        
  
    {errors && errors.map(({alreadyaccp},index)=>{
                               
        if(alreadyaccp){
            return <Alert key={index} variant={"success"}>
    Your request already accepted by rider
  </Alert>
            
        } 
          return null
        
    })}
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Enter you Number</Form.Label>
    <Form.Control type="number" placeholder="number" name="fromnumber" value={req.fromnumber} onChange={(e)=>{
      var {name,value}=e.target
      setreq((p)=>({...p,[name]:value}))
    }} />
   {errors && errors.map(({numberempty},index)=>{
                               
    if(numberempty){
        return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Enter you phone number</span>
    } 
      return null
    
})}
  </Form.Group>
  

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter message</Form.Label>
    <Form.Control as="textarea" placeholder="Message " rows={3} name="frommsg" value={req.frommsg} onChange={(e)=>{
      var {name,value}=e.target
      setreq((p)=>({...p,[name]:value}))
    }} />
       {errors && errors.map(({msgempty},index)=>{
                               
        if(msgempty){
            return <span key={index} className="w-100 text-danger" style={{fontSize:".8em"}}>Enter Message</span>
        } 
          return null
        
    })}
  </Form.Group>
  
  <Button variant="success" disabled={sending} type="submit">
   {sending?"Sending..":"Send"} 
  </Button>
</Form>
      
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  
  )
}

export default VModal
