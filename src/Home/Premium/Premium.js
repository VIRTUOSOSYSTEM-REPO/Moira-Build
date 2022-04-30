import React from "react";
import casementImg from "./assets/casemen.jpg";
import "./Premium.css";
import Card from "react-animated-3d-card";
import { Fade } from "react-reveal";
import CssButton from "../../Components/CssButton";
import { Row } from "react-bootstrap";

const Premium = () => {
  return (
    <section id="about" className="mb-5 pb-5">
    <div className="about" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="about-body index">
      <Fade left duration={2000}>
        <div className="about-img1 index">
          <Card
            className="test"
            style={{
              backgroundImage: `url(${casementImg})`,
              width: "450px",
              height: "300px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Card clicked")}
          />
        </div>
        </Fade>
        
        <div className="about-description">
        <Fade right duration={2000}>
          <h1 >PREMIUM</h1>
          <p style={{ color: "#000000" }}>
          Extraordinary, contemporary and luxurious, these uPVC windows are sure to make a statement!
            <br />
          </p>
          <Row> <CssButton label="Moira Premium" /></Row>
           
          </Fade>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Premium