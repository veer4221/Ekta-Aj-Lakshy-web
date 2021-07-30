import React from "react";
import PostCard from "./PostCard";
const postInfo = [
  {
    creater: `admin xyz`,
    postImage:`assets/images/events/image_01.jpg`,
    titel: `Methods of Recuirtments`,
    Information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam justo neque, aliquet sit amet elementum vel, vehicula
        eget eros. Vivamus arcu metus, mattis sed sagittis at,
        sagittis quis neque. Praesent.`,
  },
  {
    creater: `admin xyz`,
    postImage:`assets/images/events/image_02.jpg`,
    titel: `Methods of Recuirtments`,
    Information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam justo neque, aliquet sit amet elementum vel, vehicula
        eget eros. Vivamus arcu metus, mattis sed sagittis at,
        sagittis quis neque. Praesent.`,
  },
  {
    creater: `admin xyz`,
    postImage:`assets/images/events/image_03.jpg`,
    titel: `Methods of Recuirtments`,
    Information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam justo neque, aliquet sit amet elementum vel, vehicula
        eget eros. Vivamus arcu metus, mattis sed sagittis at,
        sagittis quis neque. Praesent.`,
  },
];

const Post = () => {
  return (
    <>
      <section className="our-blog">
        <div className="container">
          <div className="row session-title">
            <h2> Post </h2>
            <p>Events </p>
          </div>
          <div className="blog-row row">
            {postInfo && postInfo.map((data) => <PostCard data={data} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
