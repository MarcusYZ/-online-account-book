import React from "react";
class Welcome extends React.Component {
  render() {
    const test = <h1> Hello React</h1>;
    console.log(test);
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, "hello React")
    );
  }
}

export default Welcome;
