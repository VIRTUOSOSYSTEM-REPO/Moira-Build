import React from "react";

export const LayoutThree = (props) => {
  const { image, heading, paragraph } = props;
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2 position-relative third-layout">
          <h1 className="gradient about-description layout-heading">{heading}</h1>
        </div>
        <div className="col-lg-6">
          <div className="about-img1 card-size slide-three-image mx-auto">
            <figure>
              <img
                src={image}
                className="test"
                style={{
                  width: "500px",
                  height: "280px",
                  cursor: "pointer",
                }}
                alt="style"
              />
            </figure>
          </div>
        </div>
        <div className="col-lg-4 about-description">
          <p className="text-dark">
            {paragraph}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};
