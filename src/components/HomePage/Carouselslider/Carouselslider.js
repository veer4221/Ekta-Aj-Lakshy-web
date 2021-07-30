import React from "react";
import CarouselSliderSet from "./CarouselSliderSet";
import { Carousel } from "react-responsive-carousel";

const imgLink = [
  { Link: "assets/images/slider/slider-1.jpg" },
  { Link: "assets/images/slider/slider-2.jpg" },
  { Link: "assets/images/slider/slider-3.jpg" },
];
const Carouselslider = () => {
  console.log(imgLink);
  return (
    <>
      <Carousel autoPlay showThumbs={false} infiniteLoop={true} transitionTime={3} autoFocus={true} >
        {imgLink.map((data) => (
          <div>
            <img alt="" src={data.Link} />

          </div>
        ))}
      </Carousel>
      {/* <div className="slider">
        <div className="owl-carousel ">
        <CarouselSliderSet imgLink={imgLink}/>
        <CarouselSliderSet imgLink={imgLink}/>
        </div>
      </div> */}
    </>
  );
};

export default Carouselslider;
