import React from "react";
import ViewMore from "./ViewMore";
// import "../../../style/aboutUsMtextView.css";

const PostCard = ({ data }) => {
  return (
    <>
      <div className="col-md-4 col-sm-6 ">
        <div
          className="single-blog"
          style={{
            boxShadow: "rgb(0 0 0 / 35%) 0px 8px 20px 7px",
            borderRadius: "10px 10px",
          }}
        >
          <figure>
            <img src={data.postImage} alt="" />
          </figure>
          <div className="blog-detail " style={{ fontSize: "larger" }}>
            <small>{data.creater}</small>
            <h4 style={{ color: "rgb(172, 24, 24)" }}>|| {data.titel} ||</h4>
            <p style={{ color: "rgb(172, 24, 24)" }}>{data.Information}</p>
            <div className="link">
              <ViewMore Image={data.postImage} />{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
