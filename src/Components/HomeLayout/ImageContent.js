import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Notifications from "./Components/Content";
import WaitTimes from "./Components/ImageSection";
import "./style.css";
const GridLayout = WidthProvider(Responsive);

class GridLayoutDemo extends Component {
  state = {
    currentBreakpoint: "",
    layouts: storedLayouts
  };

  static defaultProps = {
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    className: "layout",
    rowHeight: 30,
    isResizable: false,
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
  };

  render() {
    return (
      <main>
        <GridLayout
          {...this.props}
          layouts={this.state.layouts}
          className="image-content-section"
        >
          <div key="notifications">
            <Notifications />
          </div>
          <div key="waitTimes">
            <WaitTimes />
          </div>
        </GridLayout>
      </main>
    );
  }
}

const storedLayouts = {
  lg: [
    { i: "notifications", w: 2, h: 6, x: 0, y: 3 },
    { i: "waitTimes", w: 2, h: 6, x: 4, y: 3 }
  ],
  md: [
    { i: "notifications", w: 2, h: 6, x: 0, y: 3 },
    { i: "waitTimes", w: 2, h: 6, x: 4, y: 3 }
  ],
  sm: [
    { i: "notifications", w: 2, h: 6, x: 0, y: 3 },
    { i: "waitTimes", w: 2, h: 6, x: 4, y: 3 }
  ],
  xs: [
    { i: "notifications", w: 1, h: 6, x: 0, y: 3 },
    { i: "waitTimes", w: 1, h: 6, x: 4, y: 3 }
  ],
  xxs: [
    { i: "notifications", w: 1, h: 6, x: 0, y: 3 },
    { i: "waitTimes", w: 1, h: 6, x: 1, y: 3 }
  ]
};

export default GridLayoutDemo;
