import React, { Component } from 'react';

class Lyrics extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      const method = 
      {method: "GET", 
      headers: {
        "Authorization" : "hidden"
      },
      type: "track"};
      fetch("https://api.spotify.com/v1/search?q=hello&type=track", method)
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
            <h1>Hello!</h1>
        );
      }
    }
  }

export default Lyrics;