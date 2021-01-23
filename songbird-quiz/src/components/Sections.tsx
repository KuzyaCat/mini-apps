import * as React from "react";
import "./Sections.css";

interface ISectionsProps {
  activeQuestion: number;
}

export class Sections extends React.Component<ISectionsProps, {}> {
  public render() {
    return (
      <ul className="Sections">
        <li className={this.props.activeQuestion === 0 ? "active" : ""}>
          Разминка
        </li>
        <li className={this.props.activeQuestion === 1 ? "active" : ""}>
          Воробьиные
        </li>
        <li className={this.props.activeQuestion === 2 ? "active" : ""}>
          Лесные птицы
        </li>
        <li className={this.props.activeQuestion === 3 ? "active" : ""}>
          Певчие птицы
        </li>
        <li className={this.props.activeQuestion === 4 ? "active" : ""}>
          Хищные птицы
        </li>
        <li className={this.props.activeQuestion === 5 ? "active" : ""}>
          Морские птицы
        </li>
      </ul>
    );
  }
}
