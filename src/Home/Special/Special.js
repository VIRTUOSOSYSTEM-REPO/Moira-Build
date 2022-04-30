import React from "react";
import Card from "react-animated-3d-card";
import img from "./assets/special.jpg";
import CssButton from "../../Components/CssButton";
import { Fade } from "react-reveal";
import { Col, Row } from "react-bootstrap";

const Special = () => {
  return (
    <section id="about">
      <div className="about" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="about-body index">
        <Fade left duration={2000}>
          <div className="about-description">
            <h1 className="gradient">SPECIAL</h1>
            <p style={{ color: "#000000" }}>
            Break the monotony of rectangular windows with arched, combination and bay uPVC windows from Moira.
              <br />
            </p>
            <Row>
            <Row>
              <Col xs={6}>
              <CssButton label="Arch" />
              </Col>
              <Col xs={6}>
              <CssButton label="Lamination" />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <CssButton label="Combination" />
              </Col>
              <Col xs={6}>
              <CssButton label="Bay Window" />
              </Col>
            </Row>
            </Row>
          </div>
          </Fade>
          <Fade right duration={2000}>
          <div className="about-img1 card-size">
            <Card
              className="test"
              style={{
                backgroundImage: `url(${img})`,
                width: "450px",
                height: "300px",
                cursor: "pointer",
              }}
              onClick={() => console.log("Card clicked")}
            />
          </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Special;
