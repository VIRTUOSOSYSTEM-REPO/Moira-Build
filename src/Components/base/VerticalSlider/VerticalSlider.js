import React from "react";

import "./verticalSlider.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GalleryList from "../GalleryList/GalleryList";

const  VerticalSlider = (props) => {
  let { title, data } = props;
  console.log(props)
  return (
    <section id="Experiences" className="ExperiencesSection section">
      <div>
        <h1 className="title font-weight-bold">{title}</h1>

        <VerticalTimeline>
          {data &&
            data.length > 0 &&
            data.map((list) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // date="2019 - presente"
                iconStyle={{ background: "#f0e9dc" }}
              >
                <h3 className="vertical-timeline-element-title">
                  {list.heading}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {list.subHeading}
                </h4>
                <p>{list.paragraph}</p>
                <br />
                {list.photos && <GalleryList photos={list.photos} />}
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default VerticalSlider;
