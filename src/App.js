import { Route, Switch } from "react-router";
import { FormMainBox, Home, RequestRider ,Header} from "./Screens";
import {Riderform,RegisterFrom,LoginForm,ForgetPassword, RequestRiderForm} from "./Screens/components"




function App() {
  return (
<>
    <Header/>
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
    <Route exact path="/requestrider">
      <RequestRider/>
   
    </Route>
    <Route path="/requestrider/:id">
      <RequestRiderForm/>
   
    </Route>
    </Switch>
   </>
  );
}

export default App;
