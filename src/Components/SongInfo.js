import React, { Component } from "react";
import { auth } from "../firebase";
import Spotify from "./Spotify";

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
        <div>
        <Spotify song = {this.state.songInfo}/>
      </div>
      );
    }
  }
}
export default SongInfo;