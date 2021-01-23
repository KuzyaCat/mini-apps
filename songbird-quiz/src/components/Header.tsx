import * as React from "react";
import "./Header.css";
import { Logo } from "./Logo";
import { Score } from "./Score";
import { Sections } from "./Sections";

export interface IHeaderProps {
  points: number;
  activeQuestion: number;
}

export class Header extends React.Component<IHeaderProps, {}> {
  public render() {
    return (
      <header className="Header">
        <div className="Header-top">
          <Logo />
          <Score points={this.props.points} />
        </div>
        <Sections activeQuestion={this.props.activeQuestion} />
      </header>
    );
  }
}
