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
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsbjVYVVAyclJqOXV0UjF5em9TOEJmYkF3QWYxTDdKZzlUV1dCOW5jRVVJeHhObTRqVyIsImp0aSI6IjU3ODRiY2ZhYWFjZTE4ZmMyMmRhMzNiNDczNmI3M2ViZDNlNWJhMzcyMTA3MmI2OWEwYzUzYzM1MWQ1Nzk2ZDNhODI4YjNjZTQ0M2RlYmRiIiwiaWF0IjoxNjE5ODIwNjk5LCJuYmYiOjE2MTk4MjA2OTksImV4cCI6MTYxOTgyNDI5OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.w1uAtKECLxVTyEnjmCc9Ji9Xa3xKjlyKTBNXS82clr8Csy14ZIbWd5FIOidA30RJQj-wEJkAsJ8fHr6RpY16Ou7ftkBZXTfjUF-YSRBFIsHlP1xlRiMvqtfYm2XIv0t1nMxBP18SL7TkCNMOg-LHYnHXHWFw_y2fP2t-D4F0P79ebag-OpskpzPqDKYiJhcfulGRDZlv0UQpT-S2NcppsYqObsh3-x9PE7kjBtgblMDXDBi5Ncy3DJo9ep7gPFWCwwkIb8WHRBz-6MAn7aRztSFrpfpAZOmxlvxt9oZARoKkVm3TKo3itQQ4kdEB30XpFCbsjWCygvyzi0pQUo5OhA"
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