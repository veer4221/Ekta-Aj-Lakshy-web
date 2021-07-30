import React from 'react'

const KaryKartaCard = ({data}) => {
    return (
        <>
            <div className="col-md-3 col-sm-6">
              <div className="single-usr">
                <img src={data.imageUrl} alt="" />
                <div className="det-o">
                  <h4>{data.name}</h4>
                  <i>{data.position}</i>
                </div>
              </div>
            </div>
        </>
    )
}

export default KaryKartaCard
