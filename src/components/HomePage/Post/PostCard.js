import React from "react";
import ViewMore from "./ViewMore";
import "../../../style/aboutUsMtextView.css";
import TextTruncate from "react-text-truncate";

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
            <img
              src={
                data && data.image
                  ? `https://health-image-maruti.s3.us-east-2.amazonaws.com/${
                      data && data.image
                    }`
                  : `https://health-image-maruti.s3.us-east-2.amazonaws.com/ektaej_laksh/Post/2021/8/7/fmHA6zZkipwfhaQ.png`
              }
              alt="img"
              height="300px"
              width="100%"
            />
          </figure>
          <div className="blog-detail " style={{ fontSize: "larger" }}>
            <small>{data.creater}</small>
            <h4 style={{ color: "rgb(172, 24, 24)" }}>|| {data.title} ||</h4>
            <TextTruncate
              line={3}
              element="p"
              truncateText="..."
              text={data.content}
            />
            {/* <p style={{ color: "rgb(172, 24, 24)" }}>{data.content}</p> */}
            <div className="link">
              <ViewMore
                Image={data.image}
                title={data.title}
                content={data.content}
              />{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
