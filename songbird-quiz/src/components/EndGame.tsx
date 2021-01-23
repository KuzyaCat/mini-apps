import * as React from "react";
import "./EndGame.css";

interface IEndGameProps {
  points: number;
  toggleShowQuiz: () => void;
}

export class EndGame extends React.Component<IEndGameProps, {}> {
  public render() {
    return (
      <div className="EndGame">
        <h1>Поздравляем!</h1>
        <h3>Вы прошли викторину и набрали {this.props.points} из 30 возможных баллов</h3>
        {this.props.points === 30 ? <h3>Вы набрали максимальное количество баллов!!! Вау круто класс!!!11!!</h3> : null}
        <button className="again" onClick={this.props.toggleShowQuiz}>Попробовать ещё раз!</button>
      </div>
    );
  }
}
