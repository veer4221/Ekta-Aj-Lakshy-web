import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const KaryKartaCard = ({ data }) => {
  return (
    <>
      <div
        className="col-md-3 col-sm-6"

      >
        <div
          className="single-usr"
          style={{
            boxShadow: "rgb(0 0 0 / 35%) 0px 8px 20px 7px",
            borderRadius: "10px 10px ",
            border: "1.9px solid gray",
            backgroundColor: "white",

            padding: "10px",
          }}
        >
          <LazyLoadImage effect="blur" src={data.imageUrl} alt="" />
          <hr
            style={{
              color: "rgb(172, 24, 24)",
            }}
          ></hr>
          <div
            className=""
            style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}
          >
            <h4 style={{ color: "rgb(172, 24, 24)", fontWeight: "bolder" }}>
              {data.name}
            </h4>
            <i>{data.position}</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default KaryKartaCard;
