import React from "react";

const PageTitle = props => {
  return (
      <h3 className="text-center p-4" style={{fontWeight: "bold"}}>
        {props.title}
      </h3>

  );
};

export default PageTitle;