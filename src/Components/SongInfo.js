import React, { Component } from "react";
import { auth } from "../firebase";
import Spotify from "./Spotify";
import CatPics from "./CatPics"
import DogPics from "./DogPics";
import PetFinder from "./PetFinder"

class SongInfo extends Component {

  constructor(props) {
    super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        songInfo: this.props.song
      };
  }

  componentDidMount() {
      this.setState({
        isLoaded: true
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        console.log(items);
      return (
        <div className="results">
        <h1>Search results for: "{this.state.songInfo}"</h1>
        <Spotify song = {this.state.songInfo}/>
        <CatPics />
        <DogPics />
        <PetFinder />
      </div>
      );
    }
  }
}
export default SongInfo;