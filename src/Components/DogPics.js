import React, { Component } from 'react';
import DogBreed from "./DogBreed"
import PetFinder from "./PetFinder"

class DogPics extends Component {
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
        const { error, isLoaded, breeds, index, renderBreed} = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else if (renderBreed) {
          return <DogBreed breed = {breeds[index]}></DogBreed>;
        } else {
          console.log("in cat")
          return (
            <div className="petButtons">
             <PetFinder type="dog"></PetFinder>
              <ul>
              <h1>Choose a dog breed to learn about it!</h1>
                  {breeds.map(breed => (
              <div className="searchResult" key={breed.id}>
              <button className="breed" onClick={(e) => this.renderBreed(e, breed.id)}>{breed.name}</button>
              </div>
                  ))}
              </ul>
        </div>
          );
        }
      }
  }

export default DogPics;