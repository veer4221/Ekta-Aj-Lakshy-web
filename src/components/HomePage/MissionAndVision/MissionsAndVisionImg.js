import React from "react";

const MissionsAndVisionImg = ({ imgLink }) => {
  return (
    <>
      <div className="col-md-6 ">
        <img
          src={`https://health-image-maruti.s3.us-east-2.amazonaws.com/${imgLink}`}
          alt="s"
        />
      </div>
    </>
  );
};

export default MissionsAndVisionImg;
