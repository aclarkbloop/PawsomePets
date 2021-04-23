import React, { Component } from 'react';

class News extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        articles: []
      };
    }
    

    componentDidMount() {
      const info = {
        "method": "GET"
      }
      var artist = "Justin%20Bieber"
      var url = "https://api.mediastack.com/v1/news?access_key=23192ca61f7254687b54ef2a0e36c856";
      fetch(url, info)
      .then(res => res.json()) 
      .then(data => {console.log(data);
          this.setState({
            isLoaded: true})})
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  
    render() {
      const { error, isLoaded, articles } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="spotifyDiv">
            <h1>News</h1>
            <ul>
                {articles.map(a => (
            <div className="searchResult"key={a.title}>
              <strong className="songLabel">Title:</strong> {a.title}, <strong className="songLabel">Author:</strong> {a.author}
            </div>
            ))}
          </ul>
          </div>
        );
      }
    }
  }

export default News;