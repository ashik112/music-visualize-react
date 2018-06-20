import React, { Component } from "react";

class PlayButton extends Component {

  render() {
    const className = this.props.isMusicPlaying ? "play active" : "play";
    return (
      <a
        onClick={this.props.onClick}
        title="Play video"
        className={className}
      />
    );
  }
}

export default PlayButton;
