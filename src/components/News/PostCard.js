import React, { lazy, Suspense } from "react";
import TextTruncate from "react-text-truncate";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ViewMore = lazy(() => import("../HomePage/Post/ViewMore"));

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
            <LazyLoadImage
              effect="blur"
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
            {/* <p style={{ color: "rgb(172, 24, 24)" }}>{data.Information}</p> */}
            <TextTruncate
              line={3}
              element="p"
              truncateText="..."
              text={data.content}
            />
            <div className="link">
              <Suspense fallback={<div>Loading...</div>}>
                <ViewMore
                  Image={data.image}
                  title={data.title}
                  content={data.content}
                />
              </Suspense>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
