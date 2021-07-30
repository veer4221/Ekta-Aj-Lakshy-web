import React from "react";

const GalleryNav = () => {
  return (
    <>
      <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>Our Gallery</h2>
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li>
                <i className="fas fa-angle-double-right"></i> Gallery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryNav;
