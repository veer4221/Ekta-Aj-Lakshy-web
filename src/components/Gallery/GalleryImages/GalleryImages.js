import React from "react";
import GallerySingalImage from "./GallerySingalImage";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      justifyContent:"center",
      display:'flex'
    },

  },
}));

const imageData = [
  {
    imageUrl: `assets/images/events/image_01.jpg`,
  },
  {
    imageUrl: `assets/images/events/image_02.jpg`,
  },
  {
    imageUrl: `assets/images/events/image_03.jpg`,
  },
  {
    imageUrl: `assets/images/events/image_04.jpg`,
  },
  {
    imageUrl: `assets/images/events/image_05.jpg`,
  },
  {
    imageUrl: `assets/images/events/image_06.jpg`,
  },
  {
    imageUrl: `assets/images/events/image_07.jpg`,
  },
  {
    imageUrl: `assets/images/events/image_08.jpg`,
  },
];

const GalleryImages = () => {
  const classes = useStyles();
  return (
    <>
      <div id="portfolio" className="gallery">
        <div className="container">
          <div className="row">
            <br />
            {imageData &&
              imageData.map((data) => <GallerySingalImage data={data} />)}
          </div>
          <div className="row">
            <div className={classes.root}>
              <Pagination count={10} color="secondary" siblingCount={0} boundaryCount={1}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryImages;
