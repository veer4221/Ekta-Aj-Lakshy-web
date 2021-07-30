import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CarouselSlide = ({link}) => {
  console.log("innersd")
  return (
    <>
      <div className="item">
        <div className="slider-img">
          <LazyLoadImage src={link} alt="f" effect="blur" width="100%"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
              <div className="animated bounceInDown slider-captions">fdfgfdg</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselSlide;
