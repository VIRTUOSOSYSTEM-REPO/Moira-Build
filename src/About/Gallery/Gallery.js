import React from "react";
import GalleryShow from "../../Components/base/GalleryShow/GalleryShow";

const Gallery = () => {
  return (
    <div className="pt-4"  style={{paddingBottom: "6rem"}}>
      <h2 className="font-weight-bold pt-3 pb-3">Moira Gallery</h2>
      <GalleryShow />
    </div>
  );
};

export default Gallery;
