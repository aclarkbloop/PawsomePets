import React, { Component } from 'react';

class CatBreed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        breedInfo: this.props.breed,
      };
    }
    

    componentDidMount() {
      console.log(this.state.breedInfo.name);
      this.setState({
        isLoaded: true
       });
    }
  
    render() {
      const { error, isLoaded, breedInfo} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        return (
          <div className="spotifyDiv">
            <h1>{breedInfo.name}</h1>
            <h3>Temperament: {breedInfo.temperament}</h3>
            <h3>Life Span: {breedInfo.life_span} years</h3>
            <h3>Origin: {breedInfo.origin}</h3>
            
          </div>
        );
      }
    }
  }

export default CatBreed;