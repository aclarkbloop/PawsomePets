import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth, generateUserDocument, signInWithGoogle } from "../firebase";



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
  event.preventDefault();
  try {
    const {user} = await auth.createUserWithEmailAndPassword(email, password);
    generateUserDocument(user, {displayName});
  }
  catch(error){
    setError('Error Signing up with email and password');
  }
    setEmail("");
    setPassword("");
    setDisplayName("");
  
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        {error !== null && (
          <div>
            {error}
          </div>
        )}
        <form>
          <label className= "label" htmlFor="displayName">
            Display Name:
          </label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
          <label className= "label" htmlFor="userEmail">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <label className= "label" htmlFor="userPassword">
            Password:
          </label>
          <input
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <p>Password must have 8-25 characters including one letter and one number</p>
          <button
            className="submit"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <p>or</p>
        <button
          className="submit"
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
        >
          Sign In with Google
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;