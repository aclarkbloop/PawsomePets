import React, { Component } from 'react';
// import Spotify from "./Components/Spotify.js";
import Application from "./Components/Application.js";
import UserProvider from "./providers/UserProvider.jsx";
class App extends Component {
  
  
  render() {
    return (
      <UserProvider>
        <Application />
      </UserProvider>
      
    );
  }
}

export default App;
