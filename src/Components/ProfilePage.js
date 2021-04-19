import React, { Component } from "react";
import { auth } from "../firebase";
import SongInfo from "./SongInfo";
import "../Styles/Application.css";

class ProfilePage extends Component {

  constructor(props) {
    super(props);
      this.state = {
        error: null,
        isLoaded: false,
        user: this.props.currUser,
        value: "",
        renderSong: false
      };
  }

  componentDidMount() {
      this.setState({
        isLoaded: true
      });
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    console.log("submitted");
    e.preventDefault();
    this.setState({
      renderSong: true
    });
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>; 
    } else {
      return (
        <div>
        <h2 className="welcome">Welcome, {this.state.user.displayName}</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Search: 
            <input type="text" name="name" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <div>
          {this.state.renderSong
          ? <SongInfo song={this.state.value}/>
          : <p>this part will have song info if you search!</p>}
        </div>
        <div>
          <button onClick = {() => {auth.signOut()}}>Sign out</button>
        </div>
      </div>
      );
    }
  }
}
export default ProfilePage;