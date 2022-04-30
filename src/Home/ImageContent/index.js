import React from "react";
import "./style.scss";
import { Row, Col, Container } from "react-bootstrap";
import image from "./casemen.jpg";

const GridLayout = () => {
  return (
    <Container>
      <Row className="image-container-section">
        <Col md={6} sm={12} className="content-section">
          <span className="content">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </span>
        </Col>

        <Col md={6} sm={12} className="image-section">
          <img src={image} alt="product-image" className="product-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default GridLayout;
