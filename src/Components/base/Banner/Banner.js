import React from "react";
import "./banner.css"

export const Banner = (props) => {
  let { title, description, image } = props;
  let squares = [];

  for (let i = 0; i < 20; i++) {
    squares.push(i);
  }

  const generateRandomNum = ({ min, max }) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div>
      <div className="intro" style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>
        <div className="quote">
          <h1 >{title}</h1>
          <p className="heading-5">{description}</p>
        </div>
        <div className="squares-wrapper">
          <ul className="squares">
            {squares.map((el, i) => {
              const randomDimensions = Math.floor(
                Math.random() * (150 - 15 + 1) + 15
              );

              return (
                <li
                  key={i}
                  className="li-style"
                  style={{
                    left: `${generateRandomNum({ min: 0, max: 90 })}%`,
                    width: randomDimensions,
                    height: randomDimensions,
                    animationDelay: `${
                      i % 2 ? generateRandomNum({ min: 0, max: 20 }) : 0
                    }s`,
                    animationDuration: `${generateRandomNum({
                      min: 10,
                      max: 50,
                    })}s`,
                  }}
                />
              );
            })}
          </ul>
        </div>
        <div className="image-overlay" />
      </div>
    </div>
  );
};
