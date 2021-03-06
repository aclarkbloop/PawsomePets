import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider"
import "../Styles/Application.css";

function Application() {
  const user = useContext(UserContext);;
  return (

        user ?
          <ProfilePage currUser = {user}/>  
      :
        <Router>
           <SignUp path="signUp" />
          <SignIn path="/" />
        </Router>
    
  

  );
}
export default Application;