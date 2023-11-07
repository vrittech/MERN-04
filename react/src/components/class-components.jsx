import { Component } from "react";

export class ClassComponent extends Component {
  constructor() {
    super();

    console.log("Set state");
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return (
      <>
        <h1>Class Component</h1>
        <p>Count: {this.state.count}</p>
        {this.props.children}
        <h1>Class Component</h1>
        <button onClick={() => this.setState({ count: 2 })}>Change to 2</button>
      </>
    );
  }
}

// A -> a1, a2
// A --> B -> a1, a2, b1, b2
// C --> B -> a1, a2, b1, b2, c1, c2
// D --> C -> a1, a2, b1, b2, c1, c2, d1, d2 (D doesn't need b1 method)

// A -> a1, a2
// B -> b1, b2
// C -> c1, c2
// D -> a1, a2, b2, c1, c2
