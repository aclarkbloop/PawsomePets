import React, { Component } from 'react';

class Lyrics extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        lyrics: []
      };
    }
    

    componentDidMount() {
      console.log("in mount");
      const info = 
      {method: "GET",
       headers: {
        'Access-Control-Allow-Origin': "http://localhost:3000",
        "x-rapidapi-key": "8a221a44c8msh2b7521877ef3353p1b5741jsnc9fd59c144de",
        "x-rapidapi-host": "songmeanings.p.rapidapi.com"
            }};
      var url = "https://songmeanings.p.rapidapi.com/?key=1877ef3353p1b5741jsnc9fd59c144de&q=justin%20bieber&page=1&page_size=25&matchmode=extended&method=songs.search&format=json";
      fetch(url, info)
      .then(res => res.json()) 
      .then(data => this.setState({
        isLoaded: true,
        lyrics: data,
       }))
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  
    render() {
      const { error, isLoaded, lyrics } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
          console.log("lyrics: " + lyrics)
        return (
          <div className="spotifyDiv">
            <h1>Lyrics {lyrics}</h1>
          </div>
        );
      }
    }
  }

export default Lyrics;