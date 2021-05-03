import React, { Component } from 'react';
import "../Styles/Spotify.css"

class Spotify extends Component {
    constructor(props) {
      super(props);
      this.state = {
        songTitle: this.props.song,
        error: null,
        isLoaded: false,
        items: [],
        token: ""
      };
    }
  
    componentDidMount() {
      // const met = 
      // {method: "POST",
      // headers: {
      //   "Authorization" : "Basic MzI2NmQyYmJkMzEzNGU0ODk3NjEyMjdkYmFkNTBmMDY6NjEwMTBmNTc2YTQxNGZhMzg1NzEwM2MyNDRmOGJkODQ="
      // }
      // }
      // fetch("https://accounts.spotify.com/api/token?grant_type=client_credentials", met)
      // .then(res => res.json())
      // .then(data => { 
      //               this.setState({
      //                 token: data.access_token})
      // })
      const method = 
      {method: "GET", 
      headers: {
        "Authorization" : "Bearer BQD1FSoLPuqQbEd7fsDYE4WMq8CZlpykF4Yp8Sa2RXhue6vFPnoCmJgzKiHeeaQFzbrSpGRDmKiWr15PGHQ"
      },
      type: "track"};
      fetch("https://api.spotify.com/v1/search?q=" + this.state.songTitle + "&type=track", method)
      .then(res => res.json())
      .then(data => { console.log(data)
        this.setState({
                      isLoaded: true,
                      items: data.tracks.items})
      })
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="spotifyDiv">
            <h1>Songs related to the name of this breed:</h1>
            <ul>
                {items.map(item => (
            <div className="searchResult"key={item.id}>
              <strong className="songLabel">Title:</strong> {item.name}, <strong className="songLabel">Artist:</strong> {item.artists[0].name} 
              <div><a href={item.external_urls.spotify}>Listen to this song on Spotify!</a></div>
            </div>
            ))}
          </ul>
          </div>
        );
      }
    }
  }

export default Spotify;