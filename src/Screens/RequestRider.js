import React, { useEffect, useState } from 'react'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import RiderCard from './components/RiderCard'
import "./RequestRider.scss"
import { Link } from 'react-router-dom'
import { firestore } from '../firebase'
function RequestRider({person}) {

    var [riders,setriders]=useState([])
    var [filterriders,setfilterriders]=useState([])
    var [error,seterror]=useState(false)
    var [value,setvalue]=useState({
        dep:"",
        arri:""
    })
    useEffect(()=>{
      var fetchdata=async()=>{
  var ref = firestore.collection("riders"),
    doc=await ref.get()
   
    setriders(doc.docs)
    setfilterriders(doc.docs)
      }
      fetchdata()
 return setfilterriders([]) && setriders([])
    },[])

    var applyfilter=(e)=>{
           seterror([])
         e.preventDefault()
        if(value.dep==="" || value.arri===""){
            seterror(["bothreq"])
            setfilterriders(riders)
        }else{
let filterride =riders.filter(rider=>rider.data().depCity.includes(value.dep) && rider.data().arriCity.includes(value.arri))

setfilterriders(filterride)
        }



    }

    var inputchange=(e)=>{
        var {name,value}=e.target
        setvalue((p)=>({...p,[name]:value}))
    }
    return (
        <>
               <Container fluid>
           <Row className="pt-5">
               <Col lg={12} className="p-0">
                   <div className=" ridermainheading "><h1>Available Rides</h1></div>
               </Col>

               <Col>
               <Form  onSubmit={applyfilter} className="d-flex flex-column justify-content-end align-items-end">

              <div className="d-flex  justify-content-end pr-4">
               
        <Form.Group controlId="formBasicPassword" className="mb-0">

    <Form.Control type="text" placeholder="from city" className={error && error.includes("bothreq")?"h-100 border-danger":"h-100"} name="dep" value={value.dep} onChange={inputchange} />
  
  </Form.Group>
      <Form.Group controlId="formBasicPassword" className="mb-0 mr-2 ml-3">

    <Form.Control type="text" placeholder="to city"  className={ error && error.includes("bothreq")?"h-100 border-danger":"h-100"} name="arri" value={value.arri} onChange={inputchange}/>
  
  </Form.Group>
     <Button variant="success" type="submit">Search</Button>
</div> 
 
  </Form>
               </Col>
               {!person && <div className="w-100 text-center bg-white">Please <Link to="/login" className="text-success">Login</Link> first to see riders</div>}
           {person && ( 
               <Col lg={12} className="mt-5 ">
              <Row className="d-flex justify-content-lg-around p-4">


                {
                    filterriders.map((rider,index)=>{
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
