import React from "react";

const AchivemtnsData = ({data}) => {
  return (
    <>
      <div className="col-sm-3 numb">
        <h3>{data.number}+</h3>
        <span>{data.lebel}</span>
      </div>
    </>
  );
};

export default AchivemtnsData;
