import React, { Component } from "react";
import { auth } from "../firebase";
import CatPics from "./CatPics"
import DogPics from "./DogPics"
import "../Styles/Application.css";

class ProfilePage extends Component {

  constructor(props) {
    super(props);
      this.state = {
        error: null,
        isLoaded: false,
        user: this.props.currUser,
        value: "",
        renderAnimal: false,
        type: "cat"
      };
  }

  componentDidMount() {
      this.setState({
        isLoaded: true
      });
  }

  renderCat() {
    this.setState({
      renderAnimal: true,
      type: "cat"
    });
  }

  renderDog() {
    this.setState({
      renderAnimal: true,
      type: "dog"
    });
  }

  handleBack(e) {
    e.preventDefault();
    this.setState({
      renderAnimal: false,
      type: ""
    });
  }

  render() {
    const { error, isLoaded, type, renderAnimal, user } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>; 
    } else {
      return (
        renderAnimal ?

        type === "cat" ?
        
        <div>
          <h2 className="welcome">Welcome, {user.displayName}</h2>
          <button className="submit" onClick={(e) => this.handleBack(e)}>Back</button>
          <CatPics path="cats"/>
          <button className="submit" onClick = {() => {auth.signOut()}}>Sign out</button>
        </div>
      
        :
        
        <div>
          <h2 className="welcome">Welcome, {user.displayName}</h2>
          <button className="submit" onClick={(e) => this.handleBack(e)}>Back</button>
          <DogPics></DogPics>
          <button className="submit" onClick = {() => {auth.signOut()}}>Sign out</button>
        </div>
      
        :
        <div className="profile">
          <h2 className="welcome">Welcome, {user.displayName}</h2>
          <h3 className="intro" >What type of pet would you like to explore?</h3>
          <div className="petButtons">
          <button size="lg" className="petButton" onClick={() => this.renderCat()}>Cats</button>
          <button size="lg" className="petButton" onClick={() => this.renderDog()}>Dogs</button>
          </div>
          <div><button className="submit" onClick = {() => {auth.signOut()}}>Sign out</button></div> 
        </div>
      );
    }
  }
}
export default ProfilePage;