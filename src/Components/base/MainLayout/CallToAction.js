import React from "react";
import Typed from "react-typed";

import "./style.css";

class CalltoAction extends React.Component {
  render() {
    return (
      <div>
        <div data-aos="fade-right">
          <h1 className="title is-spaced is-1 has-text-centered">
            Paulo Miranda
          </h1>
          <h4 className="title is-spaced is-4 has-text-centered">
            {" "}
            <span className="has-text-weight-normal">
              <Typed
                typedRef={typed => {
                  this.typed = typed;
                }}
                loop
                typeSpeed={100}
                backSpeed={75}
                strings={["product designer", "front end engineer"]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h4>
          <br />
        </div>
        <p
          className="MainSection__subtitle subtitle has-text-centered"
          data-aos="fade-left"
          data-aos-once="true"
        >
          I am passionate about <span className="underline-bold">UI/UX</span>{" "}
          Design and <span className="underline-bold">Front End</span>{" "}
          Development.
        </p>
      </div>
    );
  }
}

export default CalltoAction;
