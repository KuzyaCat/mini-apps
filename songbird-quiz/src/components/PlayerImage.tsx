import * as React from "react";
import "./PlayerImage.css";
import unknownImg from "../images/unknown-bird.jpg";

interface IPlayerImage {
  mysteryBirdImage: string;
  haveCorrectAnswer: boolean;
}
export class PlayerImage extends React.Component<IPlayerImage, {}> {
  public render() {
    return <img src={(this.props.haveCorrectAnswer && this.props.mysteryBirdImage) || unknownImg} className="player-image" />;
  }
}