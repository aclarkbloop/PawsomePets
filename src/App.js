import React, { Component } from 'react';
// import Spotify from "./Components/Spotify.js";
import Application from "./Components/Application.js";
import UserProvider from "./providers/UserProvider.jsx";
import "./Styles/App.css";
class App extends Component {
  
  
  render() {
    return (
      <div className="body">
      <div className="main">
        <title>Song-O-Matic</title>
        <h1 className="title">Song-O-Matic</h1>
      <UserProvider>
        <Application />
      </UserProvider>
      </div>
      </div>
    );
  }
}

export default App;
