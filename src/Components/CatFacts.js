import React, { Component } from 'react';


class CatFacts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        facts: []
      };
    }
    

    componentDidMount() {
      var url = "https://catfact.ninja/fact?limit=1"
      fetch(url)
      .then(res => res.json()) 
      .then(data => this.setState({
        isLoaded: true,
        facts: data
       }))
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  
    render() {
      const { error, isLoaded, facts} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="factDiv">
            <h2>A Cat Fact for Your Entertainment:</h2>
            <p>{facts.fact}</p>
          </div>
          
        );
      }
    }
  }

export default CatFacts;