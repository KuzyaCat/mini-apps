import * as React from "react";
import "./ChosenBird.css";
import { ChosenBirdImage } from "./ChosenBirdImage";
import { ChosenBirdName } from "./ChosenBirdName";
import { ChosenBirdAudio } from "./ChosenBirdAudio";
import { ChosenBirdDescr } from "./ChosenBirdDescr";

interface IChosenBirdProps {
  chosenBirdId: number;
  chosenBirdName: string;
  chosenBirdImage: string;
  chosenBirdAudio: string;
  chosenBirdSpecies: string;
  chosenBirdDescription: string;
}

export class ChosenBird extends React.Component<IChosenBirdProps, {}> {
  public render() {
    return (
      <div className="chosen-bird">
        <div className="chosen-bird--title">
          <ChosenBirdImage
            chosenBirdImage={this.props.chosenBirdImage}
            chosenBirdName={this.props.chosenBirdName}
          />
          <div className="chosen-bird--title-right">
            <ChosenBirdName
              chosenBirdName={this.props.chosenBirdName}
              chosenBirdSpecies={this.props.chosenBirdSpecies}
            />
            <ChosenBirdAudio chosenBirdAudio={this.props.chosenBirdAudio} />
          </div>
        </div>
        <ChosenBirdDescr chosenBirdDescription={this.props.chosenBirdDescription} />
      </div>
    );
  }
}