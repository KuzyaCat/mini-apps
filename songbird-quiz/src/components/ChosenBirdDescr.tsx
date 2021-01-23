import * as React from "react";
import "./ChosenBirdDescr.css";

interface IChosenBirdDescrProps {
  chosenBirdDescription: string;
}

export class ChosenBirdDescr extends React.Component<IChosenBirdDescrProps, {}> {
  public render() {
    return (
      <p className="chosen-bird-descr">
        {this.props.chosenBirdDescription}
      </p>
    )
  }
}