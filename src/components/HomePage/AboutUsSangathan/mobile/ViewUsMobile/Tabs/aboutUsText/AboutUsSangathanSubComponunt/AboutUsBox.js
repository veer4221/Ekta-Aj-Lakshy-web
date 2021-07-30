import React from "react";

const AboutUsBox = ({ icon, titel }) => {
  return (
    <>
      <div className="col-sm-12">
        <div className="about-qcard">
          <i className={icon}></i>
          <p>{titel}</p>
        </div>
      </div>
    </>
  );
};

export default AboutUsBox;
