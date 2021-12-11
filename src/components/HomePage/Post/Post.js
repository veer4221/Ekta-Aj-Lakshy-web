import Pagination from "@material-ui/lab/Pagination";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import TextTruncate from "react-text-truncate";

import {
  getPostListAction,
  resetPostStateAction,
} from "../../../Redux/Actions";
import "../../../style/aboutUsMtextView.css";
import Loader from "../../../page/loader/Loader";

import PostCard from "./PostCard";

const postInfo = [
  {
    creater: `admin xyz`,
    postImage: `assets/images/events/image_01.jpg`,
    titel: `Methods of Recuirtments`,
    Information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam justo neque, aliquet sit amet elementum vel, vehicula
        eget eros. Vivamus arcu metus, mattis sed sagittis at,
        sagittis quis neque. Praesent.`,
  },
  {
    creater: `admin xyz`,
    postImage: `assets/images/events/image_02.jpg`,
    titel: `Methods of Recuirtments`,
    Information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam justo neque, aliquet sit amet elementum vel, vehicula
        eget eros. Vivamus arcu metus, mattis sed sagittis at,
        sagittis quis neque. Praesent.`,
  },
  {
    creater: `admin xyz`,
    postImage: `assets/images/events/image_03.jpg`,
    titel: `Methods of Recuirtments`,
    Information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam justo neque, aliquet sit amet elementum vel, vehicula
        eget eros. Vivamus arcu metus, mattis sed sagittis at,
        sagittis quis neque. Praesent.`,
  },
];

const Post = () => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);

  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const [open, setOpen] = React.useState(false);

  const [count, setCount] = React.useState();
  const [reloadAgain, setReloadAgain] = React.useState(new Date());
  const [userRows, setUserRows] = React.useState();
  const [keyword, setKeyword] = React.useState("");
  const [postRows, setPostRows] = React.useState();
  useEffect(() => {
    console.log(post.getAllProduct);
    setCount(Math.floor(post.getAllProduct.count / rowsPerPage + 1));
    setPostRows(post.getAllProduct.rows);
  }, [post.getAllProduct]);
  useEffect(() => {
    dispatch(getPostListAction(page, rowsPerPage, keyword));
  }, [page, rowsPerPage, keyword, reloadAgain]);
  return (
    <>
      <Loader loading={post.loading} />
      <section className="our-blog page">
        <div className="container ">
          <div className="row session-title">
            <h2 style={{ fontFamily: "Samarkan", color: "rgb(172, 24, 24)" }}>
              {" "}
              Post{" "}
            </h2>
          </div>
          <div className="blog-row row">
            {postRows && postRows.map((data) => <PostCard data={data} />)}
          </div>
          <div>
            <Pagination
              count={count}
              shape="rounded"
              onChange={(e, value) => setPage(value)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
