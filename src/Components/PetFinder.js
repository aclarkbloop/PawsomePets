import React, { Component } from 'react';

class PetFinder extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        info: "",
        type: this.props.type
      };
    }
    

    componentDidMount() {
      console.log("in mount");
      const info = 
      {method: "GET",
        headers: {
        }}
      var url = "https://api.petfinder.com/v2/animals?type=" + this.state.type + "&page=1";
      fetch(url, info)
      .then(res => res.json()) 
      .then(data => this.setState({
        isLoaded: true,
        info: data.animals
       }))
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  
    render() {
      const { error, isLoaded, info} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        console.log(info);
        return (
          <div className="petFinder">
            <h1>PetFinder</h1>
            <h2>Find adoptable pets.</h2>
            <ul>
                  {info.map(pet => (
              <div className="pet" key={pet.id}>
                <h3>Name: {pet.name}</h3>
                <p>Contact: {pet.contact.email}</p>
                <p>Breed: {pet.breeds.primary}</p>
                {pet.photos.length > 0 ? <img src={pet.photos[0].medium}/> : <p>No photo available.</p>}
                <div><a href={pet.url}>Click to learn more</a></div>
              </div>
                  ))}
              </ul>
          </div>
        );
      }
    }
  }

export default PetFinder;