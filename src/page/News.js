import Pagination from "@material-ui/lab/Pagination";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import "../style/News.css";
import "../style/aboutUsMtextView.css";
import {
  getPostListAction,
  resetPostStateAction,
} from "../Redux/Actions/index";
import PostCard from "../components/News/PostCard";
import Gallery from "react-photo-gallery";
import { photos } from "./photos.js";
import Loader from "./loader/Loader";
import Category from "./Category";

const News = () => {
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
      <section className="our-blog page ">
        <div className="container ">
          <div className="row session-title">
            <h2 style={{ fontFamily: "Samarkan", color: "rgb(172, 24, 24)" }}>
              Post
            </h2>
          </div>
          <div className="blog-row row">
            {postRows && postRows.map((data) => <PostCard data={data} />)}
          </div>
          <div>
            <Pagination
              count={count}
              onChange={(e, value) => setPage(value)}
              shape="rounded"
            />
          </div>
        </div>
      </section>

      <div className="page">
        <div>
          <h2 style={{ textAlign: "center" }}> Gallery</h2>
        </div>
        <div>
        <Category/>
        </div>
        <Gallery photos={photos} />
      </div>
    </>
  );
};

export default News;
