import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";

import { useNavigate } from "react-router";
import PostCard from "../components/rojgarResult/PostCard";
const data = {
  image: ``,
  title: `Kirana store`,
  mobile: `9723479653`,
  address: `304,4221 asdfasd`,
  owner: `Rameshbhai patel`,
};

const RojgarResult = () => {
  return (
    <div className="page">
      <Grid container spacing={3}>
        <Grid style={{ padding: "10px" }} item xs={12} md={12}>
          <h1 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
            Rojagar shakha Report
          </h1>
          <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
        </Grid>
        <Grid style={{ padding: "10px" }} item xs={12} md={12}>
          <h3
            style={{
              color: "rgb(172, 24, 24)",
              marginTop: "-30px",
              marginLeft: "40px",
            }}
          >
            State > Taluka > City
          </h3>
        </Grid>
        <Grid style={{ padding: "10px" }} item xs={12} md={12}>
          <section className=" ">
            <div className="container ">
              <div className="blog-row row">
                <PostCard data={data} />
                <PostCard data={data} />
                <PostCard data={data} />
              </div>

              <div style={{ margin: `30px` }}>
                <Pagination count={5} shape="rounded" />
              </div>
            </div>
          </section>
          {/* <PostCard data={data} /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default RojgarResult;
