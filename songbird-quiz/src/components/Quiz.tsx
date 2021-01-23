import * as React from "react";
import "./Quiz.css";
import { Player } from "./Player";
import { VariantsContainer } from "../containers/VariantsContainer";
import { ChosenBirdContainer } from "../containers/ChosenBirdContainer";
import { Next } from "./Next";

interface IQuizProps {
  activeQuestion: number;
  setMysteryBird: (index: number) => void;
  setBirds: (index: number) => void;
  checkVariant: (index: number) => boolean;
  setCorrectAnswer: () => void;
  mysteryBirdId: number;
  mysteryBirdAudio: string;
  mysteryBirdName: string;
  mysteryBirdImage: string;
  haveCorrectAnswer: boolean;
  birds: string[];
  resetCorrectAnswer: () => void;
  nextActiveQuestion: () => void;
  choiceClick: (event: any) => void;
  classes: string[];
  chosenBirdId: number;
  chosenBirdName: string;
  chosenBirdImage: string;
  chosenBirdAudio: string;
  chosenBirdSpecies: string;
  chosenBirdDescription: string;
  showChoice: boolean;
  resetChoice: () => void;
  initClasses: () => void;
  resetTempPoints: () => void;
  toggleShowQuiz: () => void;
}

export class Quiz extends React.Component<IQuizProps, {}> {
  public render() {
    return (
      <div className="Quiz">
        <Player
          haveCorrectAnswer={this.props.haveCorrectAnswer}
          mysteryBirdAudio={this.props.mysteryBirdAudio}
          mysteryBirdName={this.props.mysteryBirdName}
          mysteryBirdImage={this.props.mysteryBirdImage}
        />
        <div className="guessing">
          <VariantsContainer
            choiceClick={this.props.choiceClick}
            classes={this.props.classes}
            haveCorrectAnswer={this.props.haveCorrectAnswer}
            setCorrectAnswer={this.props.setCorrectAnswer}
            birds={this.props.birds}
            mysteryBirdId={this.props.mysteryBirdId}
            checkVariant={this.props.checkVariant}
          />
          <ChosenBirdContainer
            chosenBirdId={this.props.chosenBirdId}
            chosenBirdName={this.props.chosenBirdName}
            chosenBirdImage={this.props.chosenBirdImage}
            chosenBirdAudio={this.props.chosenBirdAudio}
            chosenBirdSpecies={this.props.chosenBirdSpecies}
            chosenBirdDescription={this.props.chosenBirdDescription}
            showChoice={this.props.showChoice}
          />
        </div>
        <Next
          setMysteryBird={this.props.setMysteryBird}
          setBirds={this.props.setBirds}
          resetCorrectAnswer={this.props.resetCorrectAnswer}
          nextActiveQuestion={this.props.nextActiveQuestion}
          activeQuestion={this.props.activeQuestion}
          resetChoice={this.props.resetChoice}
          haveCorrectAnswer={this.props.haveCorrectAnswer}
          initClasses={this.props.initClasses}
          resetTempPoints={this.props.resetTempPoints}
          toggleShowQuiz={this.props.toggleShowQuiz}
        />
      </div>
    );
  }
}