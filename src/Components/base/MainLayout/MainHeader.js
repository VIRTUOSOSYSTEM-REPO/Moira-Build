import React from "react";
import CalltoAction from "./CallToAction";
// import Countdown from "./../Countdown";
// import Scrollchor from "react-scrollchor";
import "./mainHeader.css";

function Main(props) {
  return (
    <section
      id="Main"
      className=" section hero is-fullheight-with-navbar"
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column is-12-desktop has-text-centered-touch">
              <header className="MainSection__header has-text-centered">
                <CalltoAction />
                <br />
                <br />
                <a
                  target="_blank"
                  href="https://wa.me/5591981976107?text=Oi%20Paulo!%20Gostaria%20de%20conversar%20sobre%20..."
                  className="navbar-item"
                >
                  <div className="call-button">
                    <div className="call-button-inner">LET'S TALK?</div>
                  </div>
                </a>
              </header>
              <div className="countdown-wraper" style={{ display: "none" }}>
                <div
                  className="countdown"
                  data-aos="flip-up"
                  data-aos-once="true"
                >
                  <div className="progressBar">
                    <div className="columns is-vcentered is-centered is-desktop is-mobile">
                      <div className="column is-8 is-mobile is-desktop">
                        <div className="columns bonus-restantes is-centered is-mobile is-desktop">
                          ACEITANDO&nbsp;PROPOSTAS&nbsp;EM ATÉ
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Countdown date={`2020-06-31T00:00:00`} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
