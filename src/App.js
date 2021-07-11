import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import { fetchuser } from "./FirebaseFuctions";
import { FormMainBox, Home, RequestRider ,Header} from "./Screens";
import {Riderform,RegisterFrom,LoginForm,ForgetPassword, RequestRiderForm} from "./Screens/components"




function App() {
  var [person,setperson]=useState(null)
  var [logout,setlogout]=useState(false)
  var [login,setlogin]=useState(false)
  var [reg,setreg]=useState(false)
 

 useEffect(()=>{

        async function fetchData() {
  
       var user=await fetchuser()
      
        setperson(user)
   
  }
  fetchData();
   
    },[logout,login,reg])

  return (
<>
    <Header  person={person} setlogout={setlogout}/>
    <Switch>
      <Route exact path="/" >
      <Home person={person}/>
      </Route>
      <Route path="/register">
      <FormMainBox title={"Create your account"}>
      <RegisterFrom person={person} setreg={setreg} />
    </FormMainBox>
      </Route>
       <Route path="/login" >
      <FormMainBox title={"Login your account"}>
      <LoginForm person={person} setlogin={setlogin}/>
    </FormMainBox>
      </Route> 
      <Route path="/forgetpassword" >
      <FormMainBox title={"Reset your Password"}>
      <ForgetPassword/>
    </FormMainBox>
      </Route>
       <Route path="/postrider" >
      <FormMainBox title={"Post a Ride"}>
      <Riderform person={person}/>
    </FormMainBox>
      </Route> 
    <Route exact path="/requestrider">
      <RequestRider person={person}/>
   
    </Route>
    <Route path="/requestrider/:id">
      <RequestRiderForm person={person}/>
   
    </Route>
    </Switch>
   </>
  );
}

export default App;
