import React, { Component } from "react";

export default class InfoPage extends Component {

  render() {
    return (
      <div className="" style={{ border: "2px solid black", marginTop: "110px" }}>
        <h4>Infopage</h4>
        <h1>{this.props.props}</h1>
      </div>
    );
  }
}
