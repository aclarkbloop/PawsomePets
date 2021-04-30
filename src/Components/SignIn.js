import React, {useState} from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle } from "../firebase";
import "../Styles/Application.css";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;
        if(name === 'userEmail') {
            setEmail(value);
        } else if(name === 'userPassword'){
            setPassword(value);
        }
    };

  return (
    <div>
      <h2 className="title">Sign In</h2>
      <div>
        {error !== null && <div>{error}</div>}
        <form className="loginForm">
          <label className="fieldLabel">
            Email:
          </label>
          <input className="field"
            type="email"
            name="userEmail"
            value = {email}
            placeholder="e.g: kevin221@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label className="fieldLabel">
            Password:
          </label>
          <input className="field"
            type="password"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <br />{" "}
          <button className="submit" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p>or</p>
        <button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }} className="submit"
        >
          Sign In with Google
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="signUp">
            Sign up here
          </Link>{" "}
          <br />{" "}
        </p>
      </div>
    </div>
  );
};
export default SignIn;