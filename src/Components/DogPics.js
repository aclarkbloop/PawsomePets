import React, { Component } from 'react';

class DogPics extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        img: ""
      };
    }
    

    componentDidMount() {
      console.log("in mount");
      const info = 
      {method: "GET",
        headers: {
            'x-api-key': "91884906-e64a-42eb-9896-d4e9bf7e755e"
        }}
      var url = "https://api.thedogapi.com/v1/breeds";
      fetch(url, info)
      .then(res => res.json()) 
      .then(data => this.setState({
        isLoaded: true,
        img: data[0].image.url
       }))
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  
    render() {
      const { error, isLoaded, img} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="spotifyDiv">
            <h1>Dogs!!!</h1>
            <img src={img}/>
          </div>
        );
      }
    }
  }

export default DogPics;