import React, { Component } from 'react';
import Spotify from "./Spotify";

class DogBreed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        breedInfo: this.props.breed,
        picUrl: "",
        width: 0,
        height: 0
      };
    }
    

    componentDidMount() {
        console.log(this.state.breedInfo.id);
        const info = 
      {method: "GET",
        headers: {
        }}
      var url = "https://api.thedogapi.com/v1/images/search?breed_id=" + this.state.breedInfo.id;
        fetch(url, info)
        .then(res => res.json()) 
        .then(data => this.setState({
          isLoaded: true,
          picUrl: data[0].url,
          width: data[0].width / 2,
          height: data[0].height / 2
         }))
        .catch((error) => {
          console.error('Error:', error);
        });
      }
  
    render() {
      const { error, isLoaded, breedInfo, picUrl, width, height} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        return (
            <div className="petButtons">
                <div className="info">
                <h1>{breedInfo.name}</h1>
                <h3><strong>Temperament:</strong> {breedInfo.temperament}</h3>
                <h3><b>Life Span:</b> {breedInfo.life_span} years</h3>
                <h3><b>Origin:</b> {breedInfo.origin}</h3>
                <img width={width} height={height} src={picUrl}/>
                </div>
                <Spotify song={breedInfo.name}></Spotify>
          </div>
        );
      }
    }
  }

export default DogBreed;