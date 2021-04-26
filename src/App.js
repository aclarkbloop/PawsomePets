import React, { Component } from 'react';
// import Spotify from "./Components/Spotify.js";
import Application from "./Components/Application.js";
import UserProvider from "./providers/UserProvider.jsx";
import "./Styles/App.css";
class App extends Component {
  
  
  render() {
    return (
      <div className="body">
      <title>Pawsome Pets</title>
      <h1 className="title">Pawsome Pets</h1>
      <UserProvider>
        <Application />
      </UserProvider>
      </div>
    );
  }
}

export default App;
