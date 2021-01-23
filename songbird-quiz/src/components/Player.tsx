import * as React from "react";
import "./Player.css";
import { PlayerImage } from "./PlayerImage";
import { PlayerName } from "./PlayerName";
import { PlayerAudio } from "./PlayerAudio";

interface IPlayerProps {
  mysteryBirdAudio: string;
  mysteryBirdName: string;
  mysteryBirdImage: string;
  haveCorrectAnswer: boolean;
}

export class Player extends React.Component<IPlayerProps, {}> {
  public render() {
    return (
      <div className="Player">
        <PlayerImage
          mysteryBirdImage={this.props.mysteryBirdImage}
          haveCorrectAnswer={this.props.haveCorrectAnswer}
        />
        <div className="player--info">
          <PlayerName
            mysteryBirdName={this.props.mysteryBirdName}
            haveCorrectAnswer={this.props.haveCorrectAnswer}
          />
          <PlayerAudio mysteryBirdAudio={this.props.mysteryBirdAudio} />
        </div>
      </div>
    );
  }
}