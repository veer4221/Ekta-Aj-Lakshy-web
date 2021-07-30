import React from 'react'
import CarouselSlide from "./CarouselSlide";

const CarouselSliderSet = ({imgLink}) => {
  console.log("veer")
    return (
        <>
          <div className="slider-img">
            { <CarouselSlide link={imgLink[0].Link} />}
          </div>
          { <CarouselSlide link={imgLink[1].Link} />}

          { <CarouselSlide link={imgLink[2].Link} />}

        </>
    )
}

export default CarouselSliderSet
