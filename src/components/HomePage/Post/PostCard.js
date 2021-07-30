import React from "react";

const PostCard = ({data}) => {
  return (
    <>
      <div className="col-md-4 col-sm-6">
        <div className="single-blog">
          <figure>
            <img src={data.postImage} alt="" />
          </figure>
          <div className="blog-detail">
            <small>{data.creater}</small>
            <h4>{data.titel}</h4>
            <p>
            {data.Information}
            </p>
            <div className="link">
              <a href="">Read more </a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
