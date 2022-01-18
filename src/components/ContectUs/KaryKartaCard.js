import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const KaryKartaCard = ({ data }) => {
  return (
    <>
      <div className="col-md-3 col-sm-6">
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
          {/* {data.icon} */}
          <div style={{ textAlign: "center" }}>
            <data.icon style={{ fontSize: 80, color: `${data.color}` }} />
          </div>
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
              {data.idName}
            </h4>
            <button className="btn btn-primary">
              <a
                href={data.url}
                target="_blank"
                style={{
                  color: "white",
                  padding: "15px",
                  boxShadow: "1px",
                  textDecoration: "none",
                }}
              >
                ||<span style={{ fontSize:"13px"}}> ક્લિક કરો</span> ||
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KaryKartaCard;
