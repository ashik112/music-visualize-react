import React, { Component } from "react";

class PlayButton extends Component {

	render() {
		const props = this.props;
		const className = props.isMusicPlaying ? "play active" : "play";
		return (
			<a
				onClick={this.onClick}
				title="Play video"
				className={className}
			/>
		);
	}
}

export default PlayButton;
