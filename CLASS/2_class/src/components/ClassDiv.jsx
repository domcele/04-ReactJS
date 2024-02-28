import React from "react";
import ClassButton from "./ClassButton";

class ClassDiv extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.h3}</h3>
        <p>{this.props.paragraph}</p>
        <ClassButton text="Button" />
      </div>
    );
  }
}

export default ClassDiv;
