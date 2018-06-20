import React, { Component } from "react";
import PlayButton from "./PlayButton";
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { isMusicPlaying: false };
  }
  handleClick() {
    if (this.state.isMusicPlaying) {
        window.audio.pause();
    } else {
      window.audio.play();
    }
    this.setState(prevState => {
      return {
        isMusicPlaying: !prevState.isMusicPlaying
      };
    });
  }
  render() {
    return (
      <div>         
        <div id="container">
          <div id="hook" />
          <h1>Play Music</h1>
          <input type="file" id="files" name="files[]" multiple />
        </div>
        <PlayButton
          onClick={this.handleClick.bind(this)}
          isMusicPlaying={this.state.isMusicPlaying}
        />
        <audio id="audio" />
      </div>
    );
  }
}