import { Component } from "react";

export class ClassComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>Class Component</h1>
        {this.props.children}
        <h1>Class Component</h1>
      </>
    );
  }
}
