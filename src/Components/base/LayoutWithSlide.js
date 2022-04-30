import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./LayoutSlideStyle.css";

const LayoutWithSlide = (props) => {
  let {
    text1,
    text2,
    text3,
    img1,
    img2,
    img3,
    title1,
    title2,
    title3,
    btn1,
    btn2,
    btn3,
  } = props;
  return (
    <>
      <Container>
        <Row>
          <Col md={4} sm={12} className="card-section">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={img1} alt={"img"}/>
                  <h3>{title1}</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>{text1}</p>
                  <a href="#">{btn1}</a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12} className="card-section">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={img2} alt={"img"}/>
                  <h3>{title2}</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>{text2}</p>
                  <a href="#">{btn2}</a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12} className="card-section">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={img3} alt={"img"}/>
                  <h3>{title3}</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>{text3}</p>
                  <a href="#">{btn3}</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LayoutWithSlide;
