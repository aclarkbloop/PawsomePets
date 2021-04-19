import React, { Component } from 'react';
import "../Styles/Spotify.css"

class Spotify extends Component {
    constructor(props) {
      super(props);
      this.state = {
        songTitle: this.props.song,
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      const method = 
      {method: "GET", 
      headers: {
        "Authorization" : "Bearer"
      },
      type: "track"};
      fetch("https://api.spotify.com/v1/search?q=" + this.state.songTitle + "&type=track", method)
      .then(res => res.json())
      .then(data => 
        this.setState({
          isLoaded: true,
          items: data.tracks.items
        }))
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        console.log(items);
        return (
          <div>
            <h1>Search results for: "{this.state.songTitle}"</h1>
            <ul>
                {items.map(item => (
            <div className="searchResult"key={item.id}>
              <strong className="songLabel">Title:</strong> {item.name}, <strong className="songLabel">Artist:</strong> {item.artists[0].name}  <a href={item.external_urls.spotify}>Click!</a>
            </div>
            ))}
          </ul>
          </div>
        );
      }
    }
  }

export default Spotify;