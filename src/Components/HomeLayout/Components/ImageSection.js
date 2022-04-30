import React, { PureComponent } from "react";
import Demo from "./C1.jpg";
class ImageSection extends PureComponent {
  render() {
    console.log("Wait times");
    return (
      <div>
        <h4>Wait Times</h4>
        <img src={Demo} className="demo-image" />
      </div>
    );
  }
}

export default ImageSection;
