import React from "react";
import { Carousel } from "react-bootstrap";

function Slides(props) {
  let { data } = props;
  console.log("data", data)
  return (
    <div>
      <Carousel>
        {data &&
          data.length > 0 &&
          data.map((list) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={list.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="heading-5 heading-5-text">{list.header}</h3>
                <p>{list.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default Slides;
