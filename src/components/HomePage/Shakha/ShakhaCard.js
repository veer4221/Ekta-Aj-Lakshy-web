import React from "react";
import "../../../style/buttoncss.css";
import ViewMore from "./ViewMore";
const ShakhaCard = ({ data }) => {
  return (
    <>
      <div className="col-md-4 col-sm-6 ">
        <div
          className="event-box ourBtn"
          style={{
            boxShadow: "rgb(0 0 0 / 35%) 0px 8px 20px 7px",
            borderRadius: "10px 10px ",
            border: "1.9px solid gray",
            backgroundColor: "white",

            padding: "10px",
          }}
        >
          <img src={data.imgLink} alt="" />
          <h4 style={{ color: "rgb(172, 24, 24)" }}>
            ||&nbsp;{data.name}&nbsp;||
          </h4>
          <p className="desic">{data.information}</p>
          <ViewMore imageUrl={data.imgLink} />
          {/* <button style={{ padding: "7px" }}>&nbsp; ||View More||&nbsp;</button> */}
        </div>
      </div>
    </>
  );
};

export default ShakhaCard;
