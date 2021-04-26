import React, { Component } from 'react';
import CatBreed from "./CatBreed"
import { Link } from "@reach/router";


class CatPics extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        breeds: [],
        index: 0,
        renderBreed: false
      };
    }
    

    componentDidMount() {
      const info = 
      {method: "GET",
        headers: {
            'x-api-key': "2c045744-9552-4264-9f75-32b2e8c436f4"
        }}
      var url = "https://api.thecatapi.com/v1/breeds";
      fetch(url, info)
      .then(res => res.json()) 
      .then(data => this.setState({
        isLoaded: true,
        breeds: data
       }))
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    renderBreed(e, id) {
      e.preventDefault();
      console.log(id);
      var index = 0;
      for (var i = 0; i < this.state.breeds.length; i++) {
        if (this.state.breeds[i].id === id) {
          index = i;
        }
      }
      this.setState({
        index: index,
        renderBreed: true
      });
    }
  
    render() {
      const { error, isLoaded, breeds, renderBreed, index} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else if (renderBreed) {
        return <CatBreed breed = {breeds[index]}></CatBreed>;
      } else {
        return (
          <div className="petButtons">
            <Link to="profile">
            Back to profile
          </Link>{" "}
            <h1>Cats!!!</h1>
            <div></div>
            <ul>
                {breeds.map(breed => (
            <div className="searchResult" key={breed.id}>
              <button onClick={(e) => this.renderBreed(e, breed.id)}>{breed.name}</button>
            </div>
            ))}
          </ul>
          </div>
        );
      }
    }
  }

export default CatPics;