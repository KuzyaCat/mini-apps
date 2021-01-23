import * as React from "react";
import "./Variants.css";
import { IVariantsContainerProps } from "../containers/VariantsContainer";

interface IVariantsProps extends IVariantsContainerProps {
  choiceClick: (event: any) => void;
  classes: string[];
  birds: string[];
}

export class Variants extends React.Component<IVariantsProps, {}> {
  public render() {
    return (
      <ul className="Variants">
        <li onClick={this.props.choiceClick} data-order="0">
          <span className={this.props.classes[0]}></span>
          {this.props.birds[0]}
        </li>
        <li onClick={this.props.choiceClick} data-order="1">
          <span className={this.props.classes[1]}></span>
          {this.props.birds[1]}
        </li>
        <li onClick={this.props.choiceClick} data-order="2">
          <span className={this.props.classes[2]}></span>
          {this.props.birds[2]}
        </li>
        <li onClick={this.props.choiceClick} data-order="3">
          <span className={this.props.classes[3]}></span>
          {this.props.birds[3]}
        </li>
        <li onClick={this.props.choiceClick} data-order="4">
          <span className={this.props.classes[4]}></span>
          {this.props.birds[4]}
        </li>
        <li onClick={this.props.choiceClick} data-order="5">
          <span className={this.props.classes[5]}></span>
          {this.props.birds[5]}
        </li>
      </ul>
    );
  }
}