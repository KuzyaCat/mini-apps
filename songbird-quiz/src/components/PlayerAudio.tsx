import * as React from "react";
import "./PlayerAudio.css";

interface IPlayerAudioProps {
  mysteryBirdAudio: string;
}

export class PlayerAudio extends React.Component<IPlayerAudioProps, {}> {
  public componentDidUpdate() {
    (this.refs.audio as any).pause();
    (this.refs.audio as any).load();
  }

  public render() {
    return (
      <audio className="player-audio" controls ref="audio">
        <source src={this.props.mysteryBirdAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio >
    )
  }
}