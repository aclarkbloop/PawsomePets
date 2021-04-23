import React, { Component } from 'react';

class PetFinder extends Component {
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
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsbjVYVVAyclJqOXV0UjF5em9TOEJmYkF3QWYxTDdKZzlUV1dCOW5jRVVJeHhObTRqVyIsImp0aSI6ImNhYjEwY2YyZGJmYjE5MjRhMDFiZDk0YTkwZDliMWFmOWNhZjA5YWRiNTAxOTllZjE0ZDE3MGNhN2ZiNWFlYzIxZmRhOWQ1OTE5NmZjNmY1IiwiaWF0IjoxNjE5MTM1MjAxLCJuYmYiOjE2MTkxMzUyMDEsImV4cCI6MTYxOTEzODgwMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZH0bW_DrYETakPsmXUAddlYlwxJkNmlgBDGFH0JvTWkLd1dOzFcmvrN6oE9wZEI2NVoTjeEkyfaYoOlTpUa4j-gRBHdOubKESh0hlUrJc7Ki5Z9oWiTMChPn2eagPBVh6UUsqOru4LdkP7tcC7IOd6hrq2TIdDqabphCU5pH-kJe3IhOdIgRJM71fgRCgX4MKlMTDuH3TgheTKA3gRwtK7gp3D9OnAx7zj2KVMm12vQD5GMW0LskZq9-t3ZcPV344_DfAOyaukIoaSKeh4MUIONky-wwPSpYGi5yXKz8uMUJYgTDug87cI_t6dC73F4OTY8ziR4ni5uXMk3FUoFjWQ"
        }}
      var url = "https://api.petfinder.com/v2/animals?type=dog&page=2";
      fetch(url, info)
      .then(res => res.json()) 
      .then(data => this.setState({
        isLoaded: true,
        img: data.animals[0].type
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
          console.log(img)
        return (
        
          <div className="spotifyDiv">
            <h1>PetFinder!</h1>
            <p>{img}</p>
          </div>
        );
      }
    }
  }

export default PetFinder;