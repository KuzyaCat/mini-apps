import * as React from "react";
import "./ChosenBirdAudio.css";

interface IChosenBirdAudioProps {
  chosenBirdAudio: string;
}

export class ChosenBirdAudio extends React.Component<IChosenBirdAudioProps, {}> {
  public componentDidUpdate() {
    (this.refs.audio as any).pause();
    (this.refs.audio as any).load();
  }

  public render() {
    return (
      <audio className="chosen-bird-audio" controls ref="audio">
        <source src={this.props.chosenBirdAudio} type="audio/mpeg" />
      </audio>
    )
  }
}