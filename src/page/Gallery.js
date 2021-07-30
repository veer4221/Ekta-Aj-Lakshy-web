import React from "react";
import GalleryImages from "../components/Gallery/GalleryImages/GalleryImages";
import GalleryNav from "../components/Gallery/GalleryNav/GalleryNav";
import "../style/Gallery.css"
window.scrollTo(0, 0);
const Gallery = () => {
  return (
    <div className="gelery">
    <GalleryNav/>
    <GalleryImages/>
    </div>
  );
};

export default Gallery;
