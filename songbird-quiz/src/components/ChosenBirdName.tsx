import * as React from "react";
import "./ChosenBirdName.css";

interface IChosenBirdNameProps {
  chosenBirdSpecies: string;
  chosenBirdName: string;
}

export class ChosenBirdName extends React.Component<IChosenBirdNameProps, {}> {
  public render() {
    return (
      <div className="chosen-bird--name">
        <h2>{this.props.chosenBirdName}</h2>
        <h4>{this.props.chosenBirdSpecies}</h4>
      </div>
    )
  }
}