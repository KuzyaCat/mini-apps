import * as React from "react";
import "./Score.css";

interface IScoreProps {
  points: number;
}

export class Score extends React.Component<IScoreProps, {}> {
  public render() {
    return <span className="Score">Score: {this.props.points}</span>;
  }
}
