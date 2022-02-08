import Pagination from "@material-ui/lab/Pagination";

import React, { useEffect, useRef } from "react";

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
import { getAllImagesAPI } from "../api";
// https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/
const News = () => {
  let myRef = useRef()
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
  const [pagenumber, setPageNumber] = React.useState(1);
  const [galleryData, setgalleryData] = React.useState([]);
  const [pageG, setPageG] = React.useState(1);
  const [countG, setCountG] = React.useState();
  const [limitG, setLimitG] = React.useState(9);
  const [categoryG, setCategoryG] = React.useState("all");
  const [onFindBtnClick, setonFindBtnClick] = React.useState(new Date());

  const fatchgalleryData = async () => {
    const resData = await getAllImagesAPI(categoryG, pageG, limitG, "");
    console.log("resData", resData.data);
    setCountG(Math.floor(resData?.data?.count / limitG + 1));
    setgalleryData(resData?.data?.rows);
  };
  useEffect(
    () => fatchgalleryData(),
    [pageG, limitG, categoryG, onFindBtnClick]
  );
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
              અહેવાલ
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
        <div ref={myRef}>
          <h2
            style={{
              fontFamily: "Samarkan",
              color: "rgb(172, 24, 24)",
              textAlign: "center",
              paddingTop: "30px",
            }}
          >
            ફોટો ગેલેરી
          </h2>
        </div>
        <div>
          <Category setCategoryG={setCategoryG} />
        </div>
        <Gallery photos={galleryData} />
        <br></br>
        <Pagination
          count={countG}
          onChange={(e, value) => {setPageG(value)
            window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
          }}
          shape="rounded"
        />
        <br></br>
      </div>
    </>
  );
};

export default News;
