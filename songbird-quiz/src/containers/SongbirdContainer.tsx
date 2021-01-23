import * as React from "react";
import { Songbird } from "../components/Songbird";

interface ISongbirdState {
  points: number;
  activeQuestion: number;
  haveCorrectAnswer: boolean;
  tempPoints: number;
  showQuiz: boolean;
}

const initialState: ISongbirdState = {
  points: 0,
  activeQuestion: 0,
  haveCorrectAnswer: false,
  tempPoints: 5,
  showQuiz: true
}

export class SongbirdContainer extends React.Component<{}, ISongbirdState> {
  constructor(props: any) {
    super(props)

    this.setCorrectAnswer = this.setCorrectAnswer.bind(this);
    this.nextActiveQuestion = this.nextActiveQuestion.bind(this);
    this.resetCorrectAnswer = this.resetCorrectAnswer.bind(this);
    this.resetTempPoints = this.resetTempPoints.bind(this);
    this.decreaseTempPoints = this.decreaseTempPoints.bind(this);
    this.setScore = this.setScore.bind(this);
    this.toggleShowQuiz = this.toggleShowQuiz.bind(this);

    this.state = {
      points: 0,
      activeQuestion: 0,
      haveCorrectAnswer: false,
      tempPoints: 5,
      showQuiz: true
    };
  }

  public setCorrectAnswer(): void {
    this.setState({
      haveCorrectAnswer: true
    });
  }

  public resetCorrectAnswer(): void {
    this.setState({
      haveCorrectAnswer: false
    });
  }

  public nextActiveQuestion(): void {
    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  }

  public resetTempPoints(): void {
    this.setState({
      tempPoints: 5
    });
  }

  public decreaseTempPoints(): void {
    this.setState({
      tempPoints: this.state.tempPoints - 1
    })
  }

  public setScore(): void {
    this.setState({
      points: this.state.points + this.state.tempPoints
    })
  }

  public toggleShowQuiz(): void {
    if (this.state.showQuiz === false) {
      this.setState(initialState);
    }
    this.setState({
      showQuiz: !this.state.showQuiz
    });
  }

  public render() {
    return (
      <Songbird
        points={this.state.points}
        activeQuestion={this.state.activeQuestion}
        setCorrectAnswer={this.setCorrectAnswer}
        haveCorrectAnswer={this.state.haveCorrectAnswer}
        resetCorrectAnswer={this.resetCorrectAnswer}
        nextActiveQuestion={this.nextActiveQuestion}
        decreaseTempPoints={this.decreaseTempPoints}
        resetTempPoints={this.resetTempPoints}
        setScore={this.setScore}
        toggleShowQuiz={this.toggleShowQuiz}
        showQuiz={this.state.showQuiz}
      />
    );
  }
}
