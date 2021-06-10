import { Route, Switch } from "react-router";
import ForgetPassword from "./Screens/components/ForgetPassword";
import LoginForm from "./Screens/components/LoginForm";
import RegisterFrom from "./Screens/components/RegisterFrom";
import Riderform from "./Screens/components/Riderform";
import FormMainBox from "./Screens/FormMainBox";




function App() {
  return (


    <Switch>
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
    </Switch>
   
  );
}

export default App;
