import React from "react";
import "./imageStayle.css"
const MissionsAndVisionImg = ({ imgLink }) => {
  return (
    <>
      <div className="col-md-6 ">
        <img
        className="missionImg"
          src={`${imgLink}`}
          alt="s"
        />
      </div>
    </>
  );
};

export default MissionsAndVisionImg;
