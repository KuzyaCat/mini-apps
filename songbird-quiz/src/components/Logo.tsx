import * as React from "react";
import "./Logo.css";
import logo from "../images/songbird-logo.svg";

export class Logo extends React.Component {
  public render() {
    return <img src={logo} alt="Songbird" className="Logo" />;
  }
}
