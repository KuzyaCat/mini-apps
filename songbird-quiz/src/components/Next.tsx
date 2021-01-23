import * as React from "react";
import "./Next.css";

interface INextProps {
  setMysteryBird: (index: number) => void;
  setBirds: (index: number) => void;
  resetCorrectAnswer: () => void;
  nextActiveQuestion: () => void;
  activeQuestion: number;
  resetChoice: () => void;
  haveCorrectAnswer: boolean;
  initClasses: () => void;
  resetTempPoints: () => void;
  toggleShowQuiz: () => void;
}

export class Next extends React.Component<INextProps, {}> {
  constructor(props: INextProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(event: any): void {
    this.props.resetTempPoints();
    this.props.nextActiveQuestion();
    this.props.initClasses();
    this.props.resetCorrectAnswer();
    this.props.resetChoice();
    if (this.props.activeQuestion === 5) {
      this.props.toggleShowQuiz();
    }
  }

  public render() {
    return (
      <button
        onClick={(event: any) => this.props.haveCorrectAnswer ? this.handleClick(event) : {}}
        className={this.props.haveCorrectAnswer ? "Next green" : "Next"}
      >
        Next Level
      </button>
    )
  }
}