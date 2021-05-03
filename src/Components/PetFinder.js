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
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsbjVYVVAyclJqOXV0UjF5em9TOEJmYkF3QWYxTDdKZzlUV1dCOW5jRVVJeHhObTRqVyIsImp0aSI6ImJmYTIwZTA1MzI2NTgxZmY2NjBhODc3ZTYyNWVlODMzNzI3ZTQ5YThiZmVlODE0NTFlM2VmOTIzZmIyNGZjNDE1YzhjZjdlMTY3MmRkMTdmIiwiaWF0IjoxNjIwMDcwMjM0LCJuYmYiOjE2MjAwNzAyMzQsImV4cCI6MTYyMDA3MzgzNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.NEXgFBJ7X0IyqjzZjzEC0EOgeNq4zGax5oz0eXnKtgc8KR3tNxndY3ozl-4F_3_1bT5Hq_1II1pwwgiUx0BDXRniVTKVw8EbatXtWoY5zDGI8nx5pePvJ5WKe-Pzl5zJ4uU92qFKIF1PafLzNX2j5Lj6sxf3lNkOhas9zJYYXy7WD4oS7EBk5JvdEcxPCIj1-w_AfQPYCwh9Y-ZpDQIST9VpFAfU1aJzT_TMiK0VmeOjFjMMU1GqvfId4yUfXbmQ4Aaax0AMcol2Vl2eMoy-xsAhgKmJL6-5EjzWqM9515crikVj_mTRde4bmwwRtF5o7DIGsJxFXaS1s_n6wEizUQ"
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