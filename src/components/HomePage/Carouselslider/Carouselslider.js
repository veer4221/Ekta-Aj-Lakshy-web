import React from "react";
import CarouselSliderSet from "./CarouselSliderSet";
import { Carousel } from "react-responsive-carousel";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const imgLink = [
  { Link: "assets/images/slider/slider-1.png" },
  { Link: "assets/images/slider/slider-2.png" },
  { Link: "assets/images/slider/slider-3.png" },
  { Link: "assets/images/slider/slider-4.png" },
  { Link: "assets/images/slider/slider-5.png" },
  { Link: "assets/images/slider/slider-6.png" },
  { Link: "assets/images/slider/slider-7.png" },
];
const Carouselslider = () => {
  console.log(imgLink);
  return (
    <div>
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop={true}
        transitionTime={3}
        autoFocus={true}
      >
        {imgLink.map((data) => (
          <>
            <BrowserView>
              <div>
                <img alt="" src={data.Link} style={{ height: "80vh" }} />
              </div>
            </BrowserView>
            <MobileView>
              <div>
                <img alt="" src={data.Link} />
              </div>
            </MobileView>
          </>
        ))}
      </Carousel>
      {/* <div className="slider">
        <div className="owl-carousel ">
        <CarouselSliderSet imgLink={imgLink}/>
        <CarouselSliderSet imgLink={imgLink}/>
        </div>
      </div> */}
    </div>
  );
};

export default Carouselslider;
