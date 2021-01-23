import * as React from "react";
import { Header } from "./Header";
import { QuizContainer } from "../containers/QuizContainer";
import { EndGame } from "./EndGame"
import "./Songbird.css";

interface ISongbirdProps {
  points: number;
  activeQuestion: number;
  setCorrectAnswer: () => void;
  haveCorrectAnswer: boolean;
  resetCorrectAnswer: () => void;
  nextActiveQuestion: () => void;
  decreaseTempPoints: () => void;
  resetTempPoints: () => void;
  setScore: () => void;
  toggleShowQuiz: () => void;
  showQuiz: boolean;
}

export class Songbird extends React.Component<ISongbirdProps, {}> {
  public render() {
    return (
      <div className="Songbird">
        <Header
          points={this.props.points}
          activeQuestion={this.props.activeQuestion}
        />
        {!this.props.showQuiz ?
          <EndGame
            points={this.props.points}
            toggleShowQuiz={this.props.toggleShowQuiz}
          />
          :
          <QuizContainer
            haveCorrectAnswer={this.props.haveCorrectAnswer}
            activeQuestion={this.props.activeQuestion}
            setCorrectAnswer={this.props.setCorrectAnswer}
            resetCorrectAnswer={this.props.resetCorrectAnswer}
            nextActiveQuestion={this.props.nextActiveQuestion}
            resetTempPoints={this.props.resetTempPoints}
            decreaseTempPoints={this.props.decreaseTempPoints}
            setScore={this.props.setScore}
            toggleShowQuiz={this.props.toggleShowQuiz}
          />
        }
      </div>
    );
  }
}
