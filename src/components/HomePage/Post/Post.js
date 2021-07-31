import React from "react";
import PostCard from "./PostCard";
import "../../../style/aboutUsMtextView.css";

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
      <section className="our-blog page">
        <div className="container ">
          <div className="row session-title">
            <h2 style={{fontFamily:"Samarkan",color:"rgb(172, 24, 24)"}}> Post </h2>

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
