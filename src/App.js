import { Route, Switch } from "react-router";
import { FormMainBox, Home, RequestRider } from "./Screens";
import {Riderform,RegisterFrom,LoginForm,ForgetPassword, RequestRiderForm} from "./Screens/components"




function App() {
  return (


    <Switch>
      <Route exact path="/" >
      <Home/>
      </Route>
      <Route path="/register">
      <FormMainBox title={"Create your account"}>
      <RegisterFrom/>
    </FormMainBox>
      </Route>
       <Route path="/login" >
      <FormMainBox title={"Login your account"}>
      <LoginForm/>
    </FormMainBox>
      </Route> 
      <Route path="/forgetpassword" >
      <FormMainBox title={"Reset your Password"}>
      <ForgetPassword/>
    </FormMainBox>
      </Route>
       <Route path="/postrider" >
      <FormMainBox title={"Post a Ride"}>
      <Riderform/>
    </FormMainBox>
      </Route> 
    <Route path="/requestrider">
      <RequestRider>
        <RequestRiderForm/>
      </RequestRider>
    </Route>
    </Switch>
   
  );
}

export default App;
