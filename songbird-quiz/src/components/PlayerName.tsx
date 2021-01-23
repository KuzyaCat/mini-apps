import * as React from "react";
import "./PlayerName.css";

interface IPlayerName {
  mysteryBirdName: string;
  haveCorrectAnswer: boolean;
}

export class PlayerName extends React.Component<IPlayerName, {}> {
  public render() {
    return (
      <div className="player-name">
        <span>{(this.props.haveCorrectAnswer && this.props.mysteryBirdName) || "******"}</span>
      </div>
    );
  }
}