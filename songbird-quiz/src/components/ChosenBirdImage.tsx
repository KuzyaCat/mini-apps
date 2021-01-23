import * as React from "react";
import "./ChosenBirdImage.css";

interface IChosenBirdImageProps {
  chosenBirdImage: string;
  chosenBirdName: string;
}

export class ChosenBirdImage extends React.Component<IChosenBirdImageProps, {}> {
  public render() {
    return (
      <img
        src={this.props.chosenBirdImage}
        alt={this.props.chosenBirdName}
        className="chosen-bird--image"
      />
    )
  }
}