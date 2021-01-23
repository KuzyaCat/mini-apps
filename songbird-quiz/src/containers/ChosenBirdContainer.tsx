import * as React from "react";
import { ChosenBird } from "../components/ChosenBird";

interface IChosenBirdContainerProps {
  showChoice: boolean;
  chosenBirdId: number;
  chosenBirdName: string;
  chosenBirdImage: string;
  chosenBirdAudio: string;
  chosenBirdSpecies: string;
  chosenBirdDescription: string;
}

export class ChosenBirdContainer extends React.Component<IChosenBirdContainerProps, {}> {
  public render() {
    if (!this.props.showChoice) {
      return (
        <div className="chosen-bird">
          <p>Послушайте плеер</p>
          <p>Выберите птицу из списка</p>
        </div>
      )
    } else {
      return (
        <ChosenBird
          chosenBirdId={this.props.chosenBirdId}
          chosenBirdName={this.props.chosenBirdName}
          chosenBirdImage={this.props.chosenBirdImage}
          chosenBirdAudio={this.props.chosenBirdAudio}
          chosenBirdSpecies={this.props.chosenBirdSpecies}
          chosenBirdDescription={this.props.chosenBirdDescription}
        />
      )
    }
  }
}