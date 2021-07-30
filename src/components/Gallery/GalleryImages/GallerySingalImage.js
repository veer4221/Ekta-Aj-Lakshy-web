import React from 'react'

const GallerySingalImage = ({data}) => {
    return (
        <>
            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
              <img
                src={data.imageUrl}
                className="img-responsive"
              />
            </div>
        </>
    )
}

export default GallerySingalImage
