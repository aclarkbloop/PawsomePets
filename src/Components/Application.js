import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider"
import "../Styles/Application.css";
import CatBreed from "./CatBreed";

function Application() {
  const user = useContext(UserContext);;
  return (

        user ?
        <Router>
          <ProfilePage path="/" currUser = {user}/>
        </Router>
          
      :
        <Router>
           <SignUp path="signUp" />
          <SignIn path="/" />
        </Router>
    
  

  );
}
export default Application;