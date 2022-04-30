import React from "react";

export const LayoutOne = (props) => {
  const { image, heading, paragraph } = props;
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-5">
          <div className="about-img1 card-size slide-image">
            <figure>
              <img
                src={image}
                className="test"
                style={{
                  width: "450px",
                  height: "300px",
                  cursor: "pointer",
                  borderRadius: "65px 0px"
                }}
                alt="style"
              />
            </figure>
          </div>
        </div>
        <div className="col-lg-7 about-description">
          <h1 className="gradient">{heading}</h1>
          <p className="text-dark">
            {paragraph}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};
