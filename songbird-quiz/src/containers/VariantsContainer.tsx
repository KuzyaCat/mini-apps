import * as React from "react";
import { Variants } from "../components/Variants";

export interface IVariantsContainerProps {
  haveCorrectAnswer: boolean;
  birds: string[];
  mysteryBirdId: number;
  checkVariant?: (index: number) => boolean;
  setCorrectAnswer?: () => void;
  classes: string[];
  choiceClick: (event: any) => void;
}

export class VariantsContainer extends React.Component<IVariantsContainerProps, {}> {
  public render() {
    return <Variants
      haveCorrectAnswer={this.props.haveCorrectAnswer}
      birds={this.props.birds}
      mysteryBirdId={this.props.mysteryBirdId}
      choiceClick={this.props.choiceClick}
      classes={this.props.classes}
    />
  }
}