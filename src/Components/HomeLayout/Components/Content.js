import React, { PureComponent } from "react";

class Notifications extends PureComponent {
  render() {
    console.log("Notifications");
    return (
      <React.Fragment>
        <h4>Notifications</h4>
        <ul>
          <li>Boomerango</li>
          <li>Rattler</li>
          <li>Mens Washroom</li>
          <li>Missing Child</li>
          <li>F&B Opportunity</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Notifications;